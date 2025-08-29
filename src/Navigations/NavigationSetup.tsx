import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplaceScreen from "../SplashScreen/SplashScreen";
import OnBoardingScreen from "../FeatureMain/FeatureMain";
import LoginScreen from "../Authorization/Login";
import WebViewContainer from "../WebViewContainer/WebViewContainer";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplaceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboard"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WebView"
        component={WebViewContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
