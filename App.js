import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigator/navigator';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading/build/AppLoading';

export default function App() {
  const [loaded] = useFonts({
    SukhumvitSetBold: require('./assets/font/SukhumvitSet-Bold.ttf'),
    SukhumvitSetLight: require('./assets/font/SukhumvitSet-Light.ttf'),
    SukhumvitSetMedium: require('./assets/font/SukhumvitSet-Medium.ttf'),
    SukhumvitSetSemiBold: require('./assets/font/SukhumvitSet-SemiBold.ttf'),
    SukhumvitSetText: require('./assets/font/SukhumvitSet-Text.ttf'),
    SukhumvitSetThin: require('./assets/font/SukhumvitSet-Thin.ttf'),
  });
  if (!loaded) {
    return<AppLoading />;
  }
  return (
    <NavigationContainer>
      <Navigator/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
