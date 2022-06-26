import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, View } from 'react-native';
import TBContextProvider from './src/context';
import Router from './src/router/router';
import { colorsDark } from './src/utils/template';
import F from './src/utils/fonts';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const func = async () => {
      await SplashScreen.preventAutoHideAsync();
      await loadAsync({
        'Montserrat-Regular': F.MontserratRegularFont,
        'Montserrat-Italic': F.MontserratItalicFont,
        'Montserrat-Bold': F.MontserratBoldFont,
        'Montserrat-Medium': F.MontserratMediumFont,
      });

      setFontsLoaded(true);
    };

    func().finally(() => setFontsLoaded(true));
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <TBContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colorsDark.primary}
        />
        <Router />
      </TBContextProvider>
    </View>
  );
};

export default App;
