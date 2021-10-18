import React from 'react';
import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Kanit_400Regular, Kanit_600SemiBold } from '@expo-google-fonts/kanit';

import { SelectUser } from './src/screens/SelectUser';

export default function App() {
  const [fontsLoaded] = useFonts({ Kanit_400Regular, Kanit_600SemiBold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SelectUser />
    </>
  );
}
