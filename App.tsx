import React from "react";
import type { PropsWithChildren } from "react";
import { Text, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginScreen from "./src/Authorization/Login";
import FeatureMain from "./src/FeatureMain/FeatureMain";
import SplaceScreen from "./src/SplashScreen/SplashScreen";
import WebViewContainer from "./src/WebViewContainer/WebViewContainer";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <LoginScreen />
      {/* <FeatureMain /> */}
      {/* <SplaceScreen /> */}
      {/* <WebViewContainer /> */}
    </SafeAreaProvider>
  );
}

export default App;
