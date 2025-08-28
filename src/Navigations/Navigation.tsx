import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens
import SplaceScreen from "../SplashScreen/SplashScreen";
import FeatureMain from "../FeatureMain/FeatureMain";
import LoginScreen from "../Authorization/Login";
import WebViewContainer from "../WebViewContainer/WebViewContainer";
// import NoInternetScreen from "../NoInternetScreen/NoInternetScreen";
// import ConnectionIssueScreen from "../NoInternetScreen/ConnectionIssueScreen";

// import { NavigationService } from "../Navigations/NavigationService";

// Define the types for your navigation stack
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  FeatureMain: undefined;
  WebView: undefined;
  NoInternet: undefined;
  ConnectionIssue: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const [initialRoute, setInitialRoute] = useState<
    keyof RootStackParamList | null
  >(null);

  useEffect(() => {
    const determineInitialRoute = async () => {
      try {
        // Always start with splash
        setInitialRoute("Splash");
      } catch (error) {
        console.error("Error determining initial route:", error);
        setInitialRoute("Splash");
      }
    };

    determineInitialRoute();
  }, []);

  const checkConnectivityAndNavigate = async () => {
    // const connectivity = await NavigationService.checkInternetConnection();

    // if (!connectivity.isConnected || !connectivity.isInternetReachable) {
    //   return "NoInternet";
    // }

    // Test connection speed
    // const speed = await NavigationService.testConnectionSpeed();
    // if (speed === "slow" || speed === "error") {
    //   return "ConnectionIssue";
    // }
    return "WebView";
  };

  const retryConnection = async () => {
    const nextRoute = await checkConnectivityAndNavigate();
    // You would navigate to the determined route here
    // This is handled in the specific screen components
    return nextRoute;
  };

  if (initialRoute === null) {
    return null; // or a loading spinner
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplaceScreen}
          options={{ headerShown: false }} // Hide header for splash screen
        />
        <Stack.Screen
          name="FeatureMain"
          component={FeatureMain}
          options={{ title: "Main Features", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="WebView"
          component={WebViewContainer}
          options={{ title: "Web View" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
