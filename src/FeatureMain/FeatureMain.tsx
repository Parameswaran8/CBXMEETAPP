import React, { useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  QuickMeetingIcon,
  SeamlessCalendarIcon,
  SmartReminderIcon,
} from "../Icons/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationService } from "../Navigations/NavigationService";
import { s, vs } from "react-native-size-matters";

const { width } = Dimensions.get("window");
// Define your stack param list
type RootStackParamList = {
  Onboard: undefined;
  Login: undefined;
  WebView: undefined;
  // Add other screens as needed
};

export default function OnBoardingScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSkip = async () => {
    await NavigationService.markAsLaunched();
    navigation.navigate("Login");
    // if (onFinish) onFinish();
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setPageIndex(index);
  };

  const handleNext = async () => {
    if (pageIndex < 2) {
      scrollRef.current?.scrollTo({
        x: (pageIndex + 1) * width,
        animated: true,
      });
    } else {
      await NavigationService.markAsLaunched();
      navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Skip Button Top Right */}
      <View style={styles.skipButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Swipable Content */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        {/* Screen 1 */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.middleContent}
          onPress={handleNext}
        >
          <View style={styles.clock}>
            <QuickMeetingIcon color="" size={s(200)} />
          </View>
          <Text style={styles.titleText}>Quick Meeting Setup</Text>
        </TouchableOpacity>

        {/* Screen 2 */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.middleContent}
          onPress={handleNext}
        >
          <View style={styles.reminderAlt}>
            <SmartReminderIcon color="" size={s(200)} />
          </View>
          <Text style={styles.titleText}>Smart Reminder Alerts</Text>
        </TouchableOpacity>

        {/* Screen 3 */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.middleContent}
          onPress={handleNext}
        >
          <View style={styles.calendarSync}>
            <SeamlessCalendarIcon color="" size={s(200)} />
          </View>
          <Text style={styles.titleText}>Seamless Calendar Sync</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Progress Dashes */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarRow}>
          <View
            style={[styles.progressDot, pageIndex === 0 && styles.activeDot]}
          />
          <View
            style={[styles.progressDot, pageIndex === 1 && styles.activeDot]}
          />
          <View
            style={[styles.progressDot, pageIndex === 2 && styles.activeDot]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#142F5A",
  },
  skipButtonContainer: {
    alignItems: "flex-end",
    paddingTop: s(18),
    paddingRight: s(18),
  },
  button: {
    backgroundColor: "#040C1A",
    borderRadius: s(38),
    paddingVertical: s(8),
    paddingHorizontal: s(18),
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: s(12),
    fontWeight: "bold",
  },
  middleContent: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    gap: s(50),
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: s(48),
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: s(22),
  },
  progressContainer: {
    alignItems: "center",
    marginBottom: s(48),
  },
  progressBarRow: {
    flexDirection: "row",
    gap: s(18),
  },
  progressDot: {
    width: s(65),
    height: s(4),
    borderRadius: s(22),
    backgroundColor: "#040C1A3B",
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: s(65),
  },

  clock: {
    marginLeft: s(-32),
  },

  reminderAlt: {
    marginLeft: s(55),
  },

  calendarSync: {
    marginLeft: s(35),
  },
});
