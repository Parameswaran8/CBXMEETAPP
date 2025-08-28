import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { BackIcon, GoogleIcon } from "../Icons/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { storage } from "../Context/storage";

const LoginScreen = () => {
  const handleGoogleLogin = () => {
    // 👉 Here you can integrate Firebase / Google SDK
    // For now simulate success
    Alert.alert("Login Successful", "You are now logged in!", [
      {
        text: "OK",
        onPress: () => {
          // if (onLoginSuccess) onLoginSuccess();
        },
      },
    ]);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* Top Section - Back Button */}
      <View style={styles.topBar}>
        <BackIcon size={24} color="black" />
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSubtitle}>Glad to see you here!</Text>
        </View>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <View style={styles.googleIcon}>
            <GoogleIcon size={48} />
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
    paddingTop: 20,
    paddingLeft: 20,
  },
  middleSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 30,
  },
  welcomeTitle: {
    color: "#040C1A",
    fontSize: 32,
    textAlign: "center",
    marginBottom: 7,
  },
  welcomeSubtitle: {
    color: "#747D8C",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 229,
    paddingVertical: 18,
    paddingHorizontal: 60,
    marginTop: 20,
    elevation: 3,
    gap: 8,
  },
  googleIcon: {
    borderRadius: 229,
    width: 44,
    height: 44,
    marginRight: 6,
    marginBottom: 2,
  },
  googleButtonText: {
    color: "#03338F",
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "Poppins-Regular",
  },
  bottomStripeContainer: {
    width: "100%",
  },
  bottomStripe: {
    height: 52,
  },
});
