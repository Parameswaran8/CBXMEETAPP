import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

import { CBXMEETLOGO } from "../Icons/Icons";
import { NavigationService } from "../Navigations/NavigationService";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define your stack param list
type RootStackParamList = {
  Onboard: undefined;
  Login: undefined;
  WebView: { userInfo: any };
  // Add other screens as needed
};

// type SplashScreenNavigationProp = NativeStackNavigationProp<
const SplaceScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // 🔥 fade animation
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    // ✅ Start glowing animation (pulse effect)
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    const initializeApp = async () => {
      try {
        // Show splash for 3 seconds
        await new Promise<void>((resolve) => setTimeout(resolve, 3000));
        // Check if it's the first launch
        const isFirstTime = await NavigationService.isFirstLaunch();
        console.log(33, isFirstTime);

        if (!isFirstTime) {
          // Mark as launched and show onboarding
          await NavigationService.markAsLaunched();
          navigation.navigate("Onboard");
          return;
        }

        // Check if user is logged in
        const isLoggedIn = await NavigationService.isUserLoggedIn();

        console.log("46", isLoggedIn);

        if (!isLoggedIn) {
          // navigation.replace("FeatureMain");
          navigation.navigate("Login");
          return;
        }

        // Check internet connectivity
        // const connectivity = await NavigationService.checkInternetConnection();
        // if (!connectivity.isConnected || !connectivity.isInternetReachable) {
        //   navigation.replace("NoInternet");
        //   return;
        // }

        // Test connection speed
        // const speed = await NavigationService.testConnectionSpeed();
        // if (speed === "slow" || speed === "error") {
        //   navigation.replace("ConnectionIssue");
        //   return;
        // }

        // All checks passed, go to WebView
        navigation.navigate("WebView", { userInfo: isLoggedIn });
      } catch (error) {
        console.error("Error during app initialization:", error);
        // Fallback to login screen
        navigation.navigate("Login");
      }
    };

    initializeApp();
  }, []);

  return (
    <View style={styles.contentContainer}>
      {/* Top blank */}
      <View style={styles.blank} />
      {/* Middle Logo */}
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <CBXMEETLOGO width={170} height={153} color={"#003366"} />
        <Text style={styles.titleText}>CBXMEET</Text>
        <Text style={styles.subtitleText}>Meeting Scheduler</Text>
      </Animated.View>

      {/* Bottom stripes */}
      <View style={styles.bottomcontainer}>
        <View style={styles.backgroundStripe1} />
        <View style={styles.backgroundStripe2} />
        <View style={styles.backgroundStripe3} />
        <View style={styles.backgroundStripe4} />
        <View style={styles.backgroundStripe5} />
      </View>
    </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  blank: {
    flex: 0.3,
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

  bottomcontainer: {
    width: "100%",
    flexDirection: "column",
    // backgroundColor: "red",
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
});
