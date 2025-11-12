import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  Platform,
  ActivityIndicator,
} from "react-native";
import { BackIcon, GoogleIcon } from "../Icons/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationService } from "../Navigations/NavigationService";
import { s } from "react-native-size-matters";

import {
  appleAuth,
  AppleButton,
} from "@invertase/react-native-apple-authentication";

const LabeledInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
  placeholder = "",
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="#C0C0C0"
        />
      </View>
    </View>
  );
};

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "159938487854-m996hp9rpsi9sqj3r93r9kblar0dvrs1.apps.googleusercontent.com",
      iosClientId:
        "159938487854-538etfqg3s7d2seqrc0rihur0sr9hq7s.apps.googleusercontent.com",
      offlineAccess: true,
      scopes: ["profile", "email"],
    });
  }, []);

  const handleEmailLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      // Call AuthService for login
      const response = await NavigationService.loginWithEmail(email, password);

      if (response.success && response.data) {
        // Format user info similar to Google Sign-In
        const userInfo = {
          type: "success",
          data: {
            user: response.data.user,
            token: response.data.token,
            // Add any other fields your API returns
          },
        };

        // Save user info with 6 months expiration
        await NavigationService.setUserLoggedIn(userInfo);

        // Navigate to WebView
        navigation.navigate("WebView", { userInfo: userInfo });
      }
    } catch (error: any) {
      console.error("Email login error:", error);
      Alert.alert(
        "Login Failed",
        error.message || "Please check your credentials and try again"
      );
    } finally {
      setIsLoading(false);
    }
  };

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
      console.log("google login info ", getUserInfo);

      if (getUserInfo && getUserInfo.type == "success") {
        navigation.navigate("WebView", { userInfo: getUserInfo });
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  const signInWithApple = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const { email, fullName, user } = appleAuthRequestResponse;
      console.log("Apple auth response:", appleAuthRequestResponse);

      // fallback name if Apple hides user name on re-login
      const displayName =
        fullName?.givenName || fullName?.familyName
          ? `${fullName?.givenName || ""} ${fullName?.familyName || ""}`.trim()
          : "Apple User";

      const userInfo = {
        type: "success",
        data: {
          user: {
            email: email || `${user}@appleid.com`, // fallback if Apple hides real email
            name: displayName || "Apple User",
            _user: user,
          },
        },
      };

      await NavigationService.setUserLoggedIn(userInfo);

      // console.log("Apple user info:", userInfo);
      const getUserInfo = await NavigationService.isUserLoggedIn();
      // console.log("171 getUserInfo ", getUserInfo);

      if (getUserInfo && getUserInfo.type == "success") {
        navigation.navigate("WebView", { userInfo: getUserInfo });
      }
    } catch (error: any) {
      console.log("Apple login error:", error);
      Alert.alert("Login Error", error?.message || "Apple Sign-in failed");
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

        {Platform.OS === "ios" && (
          <View style={{ marginTop: 20 }}>
            <AppleButton
              buttonStyle={AppleButton.Style.WHITE_OUTLINE}
              buttonType={AppleButton.Type.SIGN_IN}
              cornerRadius={15}
              style={{
                width: 250,
                height: 48,
                borderRadius: 30,
              }}
              onPress={signInWithApple}
            />
          </View>
        )}
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
    paddingHorizontal: s(20),
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
  formContainer: {
    width: "100%",
    marginTop: s(20),
  },
  inputWrapper: {
    marginBottom: s(20),
  },
  labelInputContainer: {
    position: "relative",
  },
  label: {
    position: "absolute",
    left: s(20),
    top: s(-8),
    backgroundColor: "#FFFFFF",
    paddingHorizontal: s(6),
    fontSize: s(13),
    color: "#040C1A",
    fontWeight: "500",
    fontFamily: "Poppins-Regular",
    zIndex: 1,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: s(12),
    paddingVertical: s(15),
    paddingHorizontal: s(20),
    fontSize: s(15),
    color: "#040C1A",
    fontFamily: "Poppins-Regular",
    borderWidth: 1.5,
    borderColor: "#D0D0D0",
  },
  inputFocused: {
    borderColor: "#03338F",
    borderWidth: 2,
  },
  emailLoginButton: {
    backgroundColor: "#03338F",
    borderRadius: s(12),
    paddingVertical: s(15),
    alignItems: "center",
    marginTop: s(5),
    marginBottom: s(20),
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  emailLoginButtonText: {
    color: "#FFFFFF",
    fontSize: s(16),
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: s(20),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: s(15),
    color: "#747D8C",
    fontSize: s(12),
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
