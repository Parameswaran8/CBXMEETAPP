import { StyleSheet, StatusBar, Alert, BackHandler } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  const webviewRef = useRef<WebView>(null);

  const { email, name } = userInfo?.data?.user || {};
  const securityToken = "TNSpl@123#";

  useEffect(() => {
    if (email && name) {
      setUserEmail(email);
      setUserName(name);
    }
  }, [email, name]);

  // ✅ Handle Android Back Button
  useEffect(() => {
    const backAction = () => {
      if (canGoBack && webviewRef.current) {
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
  }, [canGoBack]);

  console.log("userInfo 12", userInfo);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      {userEmail && userName && (
        <WebView
          ref={webviewRef}
          source={{
            uri: `https://ai.ceoitbox.com/?email=${userEmail}&passKey=${securityToken}&userName=${userName}`,
            // uri: `https://meet.ceoitbox.com/?email=${userEmail}&passKey=${securityToken}&userName=${userName}`,
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
        />
      )}
    </SafeAreaView>
  );
};

export default WebViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // so status bar background matches
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    margin: 16,
  },
});
