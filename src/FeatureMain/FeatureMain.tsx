import React, { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  QuickMeetingIcon,
  SeamlessCalendarIcon,
  SmartReminderIcon,
} from '../Icons/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

type FeatureMainProps = {
  onFinish?: () => void; // <-- added
};

export default function FeatureMain({ onFinish }: FeatureMainProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const handleSkip = () => {
    if (onFinish) onFinish();
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setPageIndex(index);
  };

  const handleNext = () => {
    if (pageIndex < 2) {
      scrollRef.current?.scrollTo({
        x: (pageIndex + 1) * width,
        animated: true,
      });
    } else {
      if (onFinish) onFinish(); // finish onboarding
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
          <QuickMeetingIcon color="" size={223} />
          <Text style={styles.titleText}>Quick Meeting Setup</Text>
        </TouchableOpacity>

        {/* Screen 2 */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.middleContent}
          onPress={handleNext}
        >
          <SmartReminderIcon color="" size={223} />
          <Text style={styles.titleText}>Smart Reminder Alerts</Text>
        </TouchableOpacity>

        {/* Screen 3 */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.middleContent}
          onPress={handleNext}
        >
          <SeamlessCalendarIcon color="" size={223} />
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
    backgroundColor: '#142F5A',
  },
  skipButtonContainer: {
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
  },
  button: {
    backgroundColor: '#040C1A',
    borderRadius: 43,
    paddingVertical: 10,
    paddingHorizontal: 21,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  middleContent: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 26,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  progressBarRow: {
    flexDirection: 'row',
    gap: 20,
  },
  progressDot: {
    width: 72,
    height: 5,
    borderRadius: 25,
    backgroundColor: '#040C1A3B',
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 72,
  },
});
