import {
  StyleSheet,
  StatusBar,
  Linking,
  Alert,
  BackHandler,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import NetInfo from "@react-native-community/netinfo";
import { storage } from "../Context/storage";
import { NavigationService } from "../Navigations/NavigationService";
import { IOSbackIcon } from "../Icons/Icons";

// If you have a typed navigator, replace "any"
type WebViewRouteParams = {
  WebView: { userInfo: any };
};

// Define your stack param list
type RootStackParamList = {
  Onboard: undefined;
  Login: undefined;
  WebView: { userInfo: any };
  // Add other screens as needed
};

const WebViewContainer = () => {
  const route = useRoute<RouteProp<WebViewRouteParams, "WebView">>();
  const { userInfo } = route.params || {};
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [appleUser, setAppleUser] = useState("");
  const [canGoBack, setCanGoBack] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(""); // ✅ Track current URL
  const [showBackButton, setShowBackButton] = useState(false); // ✅ Control back button visibility
  const webviewRef = useRef<WebView>(null);

  const { email, name, _user } = userInfo?.data?.user || {};
  const securityToken = "pass@2025";

  useEffect(() => {
    console.log(56, email, name, _user);
    if (email && name) {
      setUserEmail(email);
      setUserName(name);
      console.log(60, _user);
      setAppleUser(_user || "");
    }
  }, [email, name]);

  // ✅ Disable swipe back gesture on iOS
  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: false, // Disable swipe back
      headerShown: false, // Hide default header
    });
  }, [navigation]);

  // ✅ Network connectivity listener
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected ?? false);

      // Reset error state when connection is restored
      if (state.isConnected) {
        setHasError(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Handle Android Back Button
  useEffect(() => {
    if (Platform.OS === "android") {
      const backAction = () => {
        if (canGoBack && webviewRef.current && isConnected) {
          webviewRef.current.goBack();
          return true;
        } else {
          Alert.alert("Exit App", "Do you want to exit?", [
            { text: "Cancel", style: "cancel" },
            { text: "Yes", onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        }
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }
  }, [canGoBack, isConnected]);

  // ✅ Handle Back Button Press (Both iOS and Android custom button)
  const handleBackPress = () => {
    if (canGoBack && webviewRef.current && isConnected) {
      webviewRef.current.goBack();
    } else {
      Alert.alert("Exit App", "Do you want to exit?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () =>
            Platform.OS === "ios" ? navigation.goBack() : BackHandler.exitApp(),
        },
      ]);
    }
  };

  // ✅ Retry connection function
  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    if (webviewRef.current) {
      webviewRef.current.reload();
    }
  };

  // ✅ Offline Screen Component
  const OfflineScreen = () => (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineEmoji}>📵</Text>
      <Text style={styles.offlineTitle}>Oops! You seem offline</Text>
      <Text style={styles.offlineMessage}>
        Please check your internet connection and try again.
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
        <Text style={styles.retryButtonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );

  // ✅ Error Screen Component
  const ErrorScreen = () => (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineEmoji}>⚠️</Text>
      <Text style={styles.offlineTitle}>Connection Error</Text>
      <Text style={styles.offlineMessage}>
        Please check your network connection.
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
        <Text style={styles.retryButtonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );

  const handleWebViewMessage = async (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (!data || data.type !== "externalLink" || !data.url) return;

      let url = data.url;

      // If wa.me or api.whatsapp.com, try convert to whatsapp://send?phone=...
      if (url.includes("wa.me") || url.includes("api.whatsapp.com")) {
        try {
          const u = new URL(url);
          const params = u.searchParams;
          const text = params.get("text");
          const phone = (u.pathname || "").replace(/\//g, "");
          if (phone) {
            url = `whatsapp://send?phone=${phone}${
              text ? `&text=${encodeURIComponent(text)}` : ""
            }`;
          } else if (text) {
            url = `whatsapp://send?text=${encodeURIComponent(text)}`;
          } // else keep original url and fallback later
        } catch (e) {
          // ignore and use original url
        }
      }

      // Try open native scheme first
      try {
        const can = await Linking.canOpenURL(url);
        if (can) {
          await Linking.openURL(url);
          return;
        }
      } catch (e) {
        // continue to fallback
      }

      // Fallbacks:
      // - If whatsapp native failed but original was wa.me / api -> open original https
      if (data.url.includes("wa.me") || data.url.includes("api.whatsapp.com")) {
        try {
          await Linking.openURL(data.url);
          return;
        } catch (e) {}
      }

      // - mailto / tel typically open via mailto: or tel:
      try {
        await Linking.openURL(data.url);
        return;
      } catch (e) {
        console.warn("Fallback open failed for", data.url, e);
      }

      Alert.alert(
        "Unable to open link",
        "Please ensure the required app is installed."
      );
    } catch (err) {
      // ignore invalid messages
      console.warn("handleWebViewMessage error", err);
    }
  };

  console.log("userInfo 12", userInfo);
  console.log("Network connected:", isConnected);
  console.log("Current URL:", currentUrl);

  const injectedJS = `
  (function() {
    let meta = document.querySelector('meta[name=viewport]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'viewport';
      document.head.appendChild(meta);
    }
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no';
    
    // Prevent pull-to-refresh
    document.body.style.overscrollBehavior = 'none';
    document.documentElement.style.overscrollBehavior = 'none';
    
    // Disable pinch zoom
    document.addEventListener('gesturestart', function(e) {
      e.preventDefault();
    });
    

  })();
  true;
`;

  // ***** this is ios back handling disabled and it's disabled the scroll in android
  // document.addEventListener(
  //   "touchmove",
  //   function (event) {
  //     if (event.scale !== 1) {
  //       event.preventDefault();
  //     }
  //   },
  //   { passive: false }
  // );

  const convertGmailUrlToMailto = (urlStr: any) => {
    try {
      const url = new URL(urlStr);
      const params = url.searchParams;

      // Many sites construct gmail link with params like to, su (subject), body
      let to = params.get("to") || params.get("to[]") || "";
      let subject = params.get("su") || params.get("subject") || "";
      let body = params.get("body") || params.get("body_html") || "";

      // Gmail sometimes places params in hash fragment: #compose?to=...
      if ((!to || to.length === 0) && url.hash) {
        try {
          const hash = url.hash.replace(/^#/, "");
          const hp = new URLSearchParams(hash);
          to = to || hp.get("to") || "";
          subject = subject || hp.get("su") || hp.get("subject") || "";
          body = body || hp.get("body") || "";
        } catch (e) {}
      }

      // best-effort: try to find email-like token anywhere
      if (!to) {
        const match = urlStr.match(/([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i);
        if (match && match[1]) to = match[1];
      }

      // If nothing meaningful found, return null to indicate fallback
      if (!to && !subject && !body) return null;

      // Build mailto (avoid double-encoding)
      const parts = [];
      if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
      if (body) parts.push(`body=${encodeURIComponent(body)}`);
      const qs = parts.length ? `?${parts.join("&")}` : "";
      // keep to raw (no encodeURIComponent for @) but encode if spaces
      const toClean = to ? decodeURIComponent(to) : "";
      return `mailto:${toClean}${qs}`;
    } catch (e) {
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/*Custom Header with Back Button */}
      {showBackButton && !hasError && isConnected && (
        <View style={styles.header}>
          {Platform.OS === "ios" && ( // ✅ Show only on iOS
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackPress}
              activeOpacity={0.7}
            >
              <IOSbackIcon width={24} height={24} color={"#3c82f5"} />
            </TouchableOpacity>
          )}
        </View>
      )}

      {!isConnected ? (
        <OfflineScreen />
      ) : hasError ? (
        <ErrorScreen />
      ) : userEmail && userName ? (
        <WebView
          ref={webviewRef}
          source={{
            uri: `https://meet.ceoitbox.com/?email=${userEmail}&passkey=${securityToken}&userName=${userName}&appleUser${appleUser}`,
          }}
          style={{ flex: 1 }}
          bounces={false}
          overScrollMode="never"
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={false}
          injectedJavaScript={injectedJS}
          scrollEnabled={true}
          originWhitelist={["*"]}
          // handle whatsapp links
          onShouldStartLoadWithRequest={(request) => {
            try {
              const url = (request && request.url) || "";

              // quick flags
              const starts = (s: any) => url.startsWith(s);
              const includes = (s: any) => url.includes(s);

              const isMailTo = starts("mailto:");
              const isTel = starts("tel:");
              const isWhatsAppScheme = starts("whatsapp://");
              const isWaMe = starts("https://wa.me/");
              const isApiWhatsApp = starts("https://api.whatsapp.com/");

              const isGmail = includes("mail.google.com");
              // detect Gmail compose variants that your web page uses: /mail/?... (and view=cm, compose)
              const isGmailCompose =
                isGmail &&
                (includes("view=cm") ||
                  includes("compose") ||
                  includes("#compose") ||
                  includes("/mail/?"));

              const isOutlookCompose =
                (includes("outlook.live.com") ||
                  includes("outlook.office.com")) &&
                includes("compose");
              const isYahooCompose =
                includes("mail.yahoo.com") && includes("compose");
              const isZohoCompose =
                includes("mail.zoho.com") && includes("compose");

              const isWebmailCompose =
                isGmailCompose ||
                isOutlookCompose ||
                isYahooCompose ||
                isZohoCompose;

              // If webmail compose (gmail web open) -> try to convert to mailto and open native
              if (isWebmailCompose) {
                (async () => {
                  try {
                    const mailto =
                      convertGmailUrlToMailto(url) ||
                      convertGmailUrlToMailto(url); // try parser
                    if (mailto) {
                      try {
                        if (await Linking.canOpenURL(mailto)) {
                          await Linking.openURL(mailto);
                          return;
                        }
                      } catch (e) {
                        // still try opening
                        try {
                          await Linking.openURL(mailto);
                          return;
                        } catch (_) {}
                      }
                    }

                    // If parser couldn't create mailto, still try to find 'to' param and open mailto
                    try {
                      const u = new URL(url);
                      const toParam = u.searchParams.get("to") || "";
                      if (toParam) {
                        const mailto2 = `mailto:${decodeURIComponent(toParam)}`;
                        try {
                          await Linking.openURL(mailto2);
                          return;
                        } catch (_) {}
                      }
                    } catch (e) {}

                    // Final fallback: open mailto with empty recipient to trigger composer
                    try {
                      await Linking.openURL("mailto:");
                      return;
                    } catch (e) {}
                  } catch (err) {
                    console.warn("webmail->mailto error", err);
                  }
                  // If everything fails, as last resort open in browser (rare)
                  try {
                    await Linking.openURL(url);
                  } catch (e) {}
                })();

                return false; // prevent navigation
              }

              // Direct mailto/tel/whatsapp/wa.me handling
              if (
                isMailTo ||
                isTel ||
                isWhatsAppScheme ||
                isWaMe ||
                isApiWhatsApp
              ) {
                (async () => {
                  try {
                    // whatsapp best-effort conversion for wa.me/api
                    if (isWaMe || isApiWhatsApp) {
                      try {
                        const u = new URL(url);
                        const params = u.searchParams;
                        const text = params.get("text");
                        const phone = (u.pathname || "").replace(/\//g, "");
                        let native = url;
                        if (phone)
                          native = `whatsapp://send?phone=${phone}${
                            text ? `&text=${encodeURIComponent(text)}` : ""
                          }`;
                        else if (text)
                          native = `whatsapp://send?text=${encodeURIComponent(
                            text
                          )}`;

                        if (await Linking.canOpenURL(native)) {
                          await Linking.openURL(native);
                          return;
                        }
                      } catch (e) {}
                    }

                    // try open original scheme (mailto:, tel:, whatsapp://)
                    if (await Linking.canOpenURL(url)) {
                      await Linking.openURL(url);
                      return;
                    }

                    // fallback handling
                    if (isMailTo) {
                      const mail = url.replace(/^mailto:/i, "");
                      try {
                        await Linking.openURL(
                          `mailto:${decodeURIComponent(mail)}`
                        );
                        return;
                      } catch (e) {}
                      Alert.alert(
                        "Unable to open mail client",
                        "Please ensure a mail app is installed."
                      );
                      return;
                    }

                    if (isTel) {
                      const telNumber = url.replace(/[^0-9+]/g, "");
                      try {
                        await Linking.openURL(`tel:${telNumber}`);
                        return;
                      } catch (e) {}
                      Alert.alert(
                        "Unable to open dialer",
                        "Please ensure phone app is available."
                      );
                      return;
                    }

                    // final fallback: open in browser
                    try {
                      await Linking.openURL(url);
                    } catch (e) {}
                  } catch (e) {
                    console.warn("open external url error", e);
                  }
                })();

                return false; // block webview
              }

              // allow all other links
              return true;
            } catch (e) {
              console.warn("onShouldStartLoadWithRequest error", e);
              return true;
            }
          }}
          // normal navigation state change
          onNavigationStateChange={(navState) => {
            try {
              const url = navState?.url || "";
              setCanGoBack(navState.canGoBack);
              setCurrentUrl(url);

              // if the webview somehow navigated to a mail/whatsapp/tel url, stop it and go back
              if (
                url.startsWith("mailto:") ||
                url.startsWith("tel:") ||
                url.startsWith("whatsapp://") ||
                url.includes("wa.me") ||
                url.includes("api.whatsapp.com")
              ) {
                // stop loading if still loading
                if (
                  webviewRef &&
                  webviewRef.current &&
                  webviewRef.current.stopLoading
                ) {
                  try {
                    webviewRef.current.stopLoading();
                  } catch (e) {}
                }

                // If possible, go back to previous page. If can't go back, reload the initial URL.
                setTimeout(() => {
                  try {
                    if (
                      webviewRef &&
                      webviewRef.current &&
                      webviewRef.current.goBack &&
                      navState.canGoBack
                    ) {
                      webviewRef.current.goBack();
                    } else if (
                      webviewRef &&
                      webviewRef.current &&
                      webviewRef.current.reload
                    ) {
                      webviewRef.current.reload();
                    } else {
                      // last resort: load the original URL again
                      webviewRef.current &&
                        webviewRef.current.injectJavaScript &&
                        webviewRef.current.injectJavaScript(
                          `window.location = "${`https://meet.ceoitbox.com/?email=${userEmail}&passkey=${securityToken}&userName=${userName}`}"; true;`
                        );
                    }
                  } catch (e) {
                    // ignore
                  }
                }, 50);
                return;
              }

              // your existing logic for showing/hiding back button and logout:
              // if (
              //   url.includes(
              //     "https://meet.ceoitbox.com/user/scheduledevents"
              //   ) ||
              //   url.includes("https://meet.ceoitbox.com/user/events")
              // ) {
              //   setShowBackButton(true);
              // } else {
              //   setShowBackButton(false);
              // }

              if (url === "https://meet.ceoitbox.com") {
                setIsLoading(true);
              }

              if (url === "https://meet.ceoitbox.com/user") {
                setIsLoading(true);
                const logout = NavigationService.RemoveLoggedIN();
                console.log("logout", logout);
                navigation.replace("Login");
                setIsLoading(false);
              }
            } catch (e) {
              console.warn("onNavigationStateChange handler error", e);
            }
          }}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn("WebView error: ", nativeEvent);
            setHasError(true);
            setIsLoading(false);
          }}
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn("WebView HTTP error: ", nativeEvent);
            if (nativeEvent.statusCode >= 400) {
              setHasError(true);
              setIsLoading(false);
            }
          }}
          onLoadStart={() => {
            setIsLoading(true);
            setHasError(false);
          }}
          onLoadEnd={() => {
            setIsLoading(false);
          }}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default WebViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  // ✅ Header Styles
  header: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 2,
    paddingVertical: 12,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 28,
    color: "#007AFF",
    fontWeight: "600",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  headerRight: {
    width: 40, // Balance the layout
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    margin: 16,
  },
  offlineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  offlineEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  offlineTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  offlineMessage: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  retryButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  retryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#666",
  },
});
