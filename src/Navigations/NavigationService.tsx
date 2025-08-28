// import NetInfo from "@react-native-community/netinfo";

import { storage } from "../Context/storage";

export class NavigationService {
  // Check if it's the first time launching the app
  static async isFirstLaunch(): Promise<boolean> {
    try {
      const hasLaunched = storage.getString("FIRST_LAUNCH");
      return hasLaunched === null;
    } catch (error) {
      console.error("Error checking first launch:", error);
      return true;
    }
  }

  // Mark app as launched
  static async markAsLaunched(): Promise<void> {
    try {
      storage.set("FIRST_LAUNCH", "true");
    } catch (error) {
      console.error("Error marking as launched:", error);
    }
  }

  // Check if user is logged in
  static async isUserLoggedIn(): Promise<boolean> {
    try {
      const isLoggedIn = storage.getString("USER_LOGGED_IN");
      return isLoggedIn === "true";
    } catch (error) {
      console.error("Error checking login status:", error);
      return false;
    }
  }

  // Set user login status
  static async setUserLoggedIn(status: boolean): Promise<void> {
    try {
      storage.set("USER_LOGGED_IN", status.toString());
    } catch (error) {
      console.error("Error setting login status:", error);
    }
  }

  // Check internet connectivity
  // static async checkInternetConnection(): Promise<{
  //   isConnected: boolean;
  //   isInternetReachable: boolean;
  //   connectionType: string;
  // }> {
  //   try {
  //     const netInfo = await NetInfo.fetch();
  //     return {
  //       isConnected: netInfo.isConnected ?? false,
  //       isInternetReachable: netInfo.isInternetReachable ?? false,
  //       connectionType: netInfo.type,
  //     };
  //   } catch (error) {
  //     console.error("Error checking internet connection:", error);
  //     return {
  //       isConnected: false,
  //       isInternetReachable: false,
  //       connectionType: "unknown",
  //     };
  //   }
  // }

  // Test connection speed (basic implementation)
  // static async testConnectionSpeed(): Promise<"fast" | "slow" | "error"> {
  //   try {
  //     const startTime = Date.now();
  //     const response = await fetch("https://www.google.com/favicon.ico", {
  //       method: "HEAD",
  //       cache: "no-cache",
  //     });
  //     const endTime = Date.now();
  //     const duration = endTime - startTime;

  //     if (response.ok) {
  //       // Consider connection slow if it takes more than 3 seconds
  //       return duration > 3000 ? "slow" : "fast";
  //     }
  //     return "error";
  //   } catch (error) {
  //     console.error("Error testing connection speed:", error);
  //     return "error";
  //   }
  // }
}
