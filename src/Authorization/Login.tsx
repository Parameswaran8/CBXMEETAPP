import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { BackIcon, GoogleIcon } from "../Icons/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
// import { NavigationService } from "../Navigations/NavigationService";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationService } from "../Navigations/NavigationService";
import Navigation from "../Navigations/Navigation";
import { s } from "react-native-size-matters";

const LoginScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "159938487854-m996hp9rpsi9sqj3r93r9kblar0dvrs1.apps.googleusercontent.com",
      offlineAccess: true,
      scopes: ["profile", "email"],
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo ", userInfo.data);

      if (userInfo) {
        await NavigationService.setUserLoggedIn(userInfo);
      }

      const getUserInfo = await NavigationService.isUserLoggedIn();
      console.log("37", getUserInfo);

      if (getUserInfo && getUserInfo.type == "success") {
        navigation.navigate("WebView", { userInfo: getUserInfo });
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* Top Section - Back Button */}
      <View style={styles.topBar}>
        {/* <BackIcon size={24} color="black" /> */}
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSubtitle}>Glad to see you here!</Text>
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={signIn}>
          <View style={styles.googleIcon}>
            <GoogleIcon size={s(40)} />
          </View>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomStripeContainer}>
        <View
          style={[
            styles.bottomStripe,
            { backgroundColor: "rgba(236,238,241,0.28)" },
          ]}
        />
        <View
          style={[
            styles.bottomStripe,
            { backgroundColor: "rgba(220,227,236,0.4)" },
          ]}
        />
        <View
          style={[
            styles.bottomStripe,
            { backgroundColor: "rgba(191,202,219,0.52)" },
          ]}
        />
        <View
          style={[
            styles.bottomStripe,
            { backgroundColor: "rgba(130,154,193,0.46)" },
          ]}
        />
        <View
          style={[
            styles.bottomStripe,
            { backgroundColor: "rgba(55,94,157,0.4)" },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    paddingTop: s(20),
    paddingLeft: s(20),
  },
  middleSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: s(25),
  },
  welcomeTitle: {
    color: "#040C1A",
    fontSize: s(26),
    textAlign: "center",
    marginBottom: s(5),
  },
  welcomeSubtitle: {
    color: "#747D8C",
    fontSize: s(12.5),
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: s(229),
    paddingVertical: s(15),
    paddingHorizontal: s(50),
    marginTop: s(20),
    elevation: 3,
    gap: s(6),
  },
  googleIcon: {
    borderRadius: s(229),
    width: s(40),
    height: s(40),
    marginRight: s(6),
    marginBottom: s(2),
  },
  googleButtonText: {
    color: "#03338F",
    fontSize: s(16),
    fontWeight: "normal",
    fontFamily: "Poppins-Regular",
  },
  bottomStripeContainer: {
    width: "100%",
  },
  bottomStripe: {
    height: s(45),
  },
});
