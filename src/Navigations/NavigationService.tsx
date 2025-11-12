// import NetInfo from "@react-native-community/netinfo";

import { storage } from "../Context/storage";

type UserInfo = {
  type: string;
  data: object;
  expiresAt?: number;
};

export class NavigationService {
  // Check if it's the first time launching the app
  static async isFirstLaunch(): Promise<boolean> {
    try {
      const hasLaunched = storage.getBoolean("FIRST_LAUNCH") ?? false;
      // console.log("10,", hasLaunched);
      return hasLaunched;
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

  static async isUserLoggedIn(): Promise<UserInfo | null> {
    try {
      const stored = storage.getString("USER_LOGGED_IN");
      console.log("stored", stored);
      if (!stored) return null;

      const parsed = JSON.parse(stored);
      const { userInfo, expiresAt } = parsed;

      // check expiry
      if (expiresAt && Date.now() > expiresAt) {
        // expired — remove and return null
        storage.delete("USER_LOGGED_IN");
        return null;
      }

      return userInfo as UserInfo;
    } catch (error) {
      console.error("Error checking login status:", error);
      return null;
    }
  }

  // Set user login status
  static async setUserLoggedIn(userInfo: object): Promise<void> {
    try {
      const daysValid = 180; // 6 months
      const expiresAt = Date.now() + daysValid * 24 * 60 * 60 * 1000; // 6 months
      storage.set("USER_LOGGED_IN", JSON.stringify({ userInfo, expiresAt }));
    } catch (error) {
      console.error("Error setting login status:", error);
    }
  }

  static async RemoveLoggedIN(): Promise<string | null> {
    try {
      storage.delete("USER_LOGGED_IN");
      return "Logout Successfully";
    } catch (error) {
      console.error("Error checking login status:", error);
      return null;
    }
  }

  static async getUserInfo(): Promise<object | null> {
    try {
      const stored = storage.getString("USER_LOGGED_IN");
      console.log("stored", stored);
      if (!stored) return null;

      const parsed = JSON.parse(stored);
      const { userInfo } = parsed;

      return userInfo as object;
    } catch (error) {
      console.error("Error retrieving user info:", error);
      return null;
    }
  }

  static async loginWithEmail(email: string, password: string): Promise<any> {
    try {
      const response = await fetch("https://meet.ceoitbox.com/api/v1/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      return {
        success: true,
        data: data,
      };
    } catch (error: any) {
      console.error("Error face - loginWithEmail error:", error);
      throw error;
    }
  }
}
