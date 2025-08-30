import {
  StyleSheet,
  StatusBar,
  Alert,
  BackHandler,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import NetInfo from "@react-native-community/netinfo";

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
  const [canGoBack, setCanGoBack] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const webviewRef = useRef<WebView>(null);

  const { email, name } = userInfo?.data?.user || {};
  const securityToken = "pass@2025";

  useEffect(() => {
    if (email && name) {
      setUserEmail(email);
      setUserName(name);
    }
  }, [email, name]);

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
    const backAction = () => {
      if (canGoBack && webviewRef.current && isConnected) {
        webviewRef.current.goBack();
        return true; // Prevent app from closing
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
  }, [canGoBack, isConnected]);

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

  console.log("userInfo 12", userInfo);
  console.log("Network connected:", isConnected);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {!isConnected ? (
        <OfflineScreen />
      ) : hasError ? (
        <ErrorScreen />
      ) : userEmail && userName ? (
        <WebView
          ref={webviewRef}
          source={{
            uri: `https://meet.ceoitbox.com/?email=${userEmail}&passkey=${securityToken}&userName=${userName}`,
          }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);

            // ✅ Logout detect by URL
            if (navState.url.includes("/login")) {
              navigation.replace("Login");
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
