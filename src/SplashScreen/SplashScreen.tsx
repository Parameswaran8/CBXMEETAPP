import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../Navigations/Navigation";
// import { NavigationService } from "../Navigations/NavigationService";

import { CBXMEETLOGO } from "../Icons/Icons";

// type SplashScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Splash"
// >;

// interface Props {
//   navigation: SplashScreenNavigationProp;
// }

// const SplaceScreen: React.FC<Props> = ({ navigation }) => {
const SplaceScreen = () => {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Show splash for 3 seconds
        await new Promise<void>((resolve) => setTimeout(resolve, 3000));
        // Check if it's the first launch
        // const isFirstTime = await NavigationService.isFirstLaunch();

        // if (isFirstTime) {
        // Mark as launched and show onboarding
        // await NavigationService.markAsLaunched();
        // navigation.replace("FeatureMain");
        // return;
        // }

        // // Check if user is logged in
        // const isLoggedIn = await NavigationService.isUserLoggedIn();

        // if (!isLoggedIn) {
        //   navigation.replace("FeatureMain");
        //   // navigation.replace("Login");
        //   return;
        // }

        // // Check internet connectivity
        // const connectivity = await NavigationService.checkInternetConnection();

        // if (!connectivity.isConnected || !connectivity.isInternetReachable) {
        //   navigation.replace("NoInternet");
        //   return;
        // }

        // // Test connection speed
        // const speed = await NavigationService.testConnectionSpeed();
        // if (speed === "slow" || speed === "error") {
        //   navigation.replace("ConnectionIssue");
        //   return;
        // }

        // All checks passed, go to WebView
        // navigation.replace("WebView");
      } catch (error) {
        console.error("Error during app initialization:", error);
        // Fallback to login screen
        // navigation.replace("Login");
      }
    };

    initializeApp();
  }, []);
  // }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View></View>
        <View style={styles.logoContainer}>
          <CBXMEETLOGO width={170} height={153} color={"#fff"} />
          <Text style={styles.titleText}>CBXMEET</Text>
          <Text style={styles.subtitleText}>Meeting Scheduler</Text>
        </View>

        {/* Background stripes */}
        {/* <View style={styles.bottomcontainer}> */}
        <View style={styles.backgroundStripe1} />
        <View style={styles.backgroundStripe2} />
        <View style={styles.backgroundStripe3} />
        <View style={styles.backgroundStripe4} />
        <View style={styles.backgroundStripe5} />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default SplaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  topImage: {
    borderRadius: 30,
    height: 37,
    marginBottom: 240,
    alignSelf: "stretch",
  },
  logoContainer: {
    marginBottom: 5,
    alignItems: "center",
  },
  titleText: {
    color: "#040C1A",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitleText: {
    color: "#5D636E",
    fontSize: 16,
  },
  loader: {
    marginTop: 20,
  },
  backgroundStripe1: {
    height: 53,
    alignSelf: "stretch",
    backgroundColor: "rgba(236, 238, 241, 0.28)",
  },
  backgroundStripe2: {
    height: 51,
    alignSelf: "stretch",
    backgroundColor: "rgba(220, 227, 236, 0.4)",
  },
  backgroundStripe3: {
    height: 60,
    alignSelf: "stretch",
    backgroundColor: "rgba(191, 202, 219, 0.52)",
  },
  backgroundStripe4: {
    height: 57,
    alignSelf: "stretch",
    backgroundColor: "rgba(130, 154, 193, 0.46)",
  },
  backgroundStripe5: {
    height: 52,
    alignSelf: "stretch",
    backgroundColor: "rgba(33, 64, 113, 0.47)",
  },

  bottomcontainer: {
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: "red",
  },
});
