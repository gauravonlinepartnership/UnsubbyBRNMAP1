import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <AppContent isDarkMode={isDarkMode} />
    </SafeAreaProvider>
  );
}

function AppContent({ isDarkMode }: { isDarkMode: boolean }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <Text style={styles.title}>🔥 Unsubby is Comming Soon!</Text>
        <Text style={styles.subtitle}>On Play Store And App Store</Text>

        <View style={styles.box}>
          <Text style={styles.boxText}>Base branch reset done to get it achieved you enjoy the App ? ❤️ are you enjoying ?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    opacity: 0.7,
  },
  box: {
    width: '90%',
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 16,
  },
});

export default App;
