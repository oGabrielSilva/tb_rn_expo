import React, { useContext, useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TBContext } from '../context';
import LogIn from '../screens/LogIn';
import { IRootStackParamsList } from '../types/navigation';
import SignUp from '../screens/SignUp';
import SplashScreen from '../screens/SplashScreen';
import { bearerTokenKey } from '../utils/keys';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator<IRootStackParamsList>();

const Router = () => {
  const { bearerToken, darkMode, colors } = useContext(TBContext);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const func = () => AsyncStorage.getItem(bearerTokenKey);

    func()
      .then()
      .finally(() => setLoading(true));
  }, []);

  return (
    <>
      <StatusBar
        barStyle={(darkMode && 'light-content') || 'dark-content'}
        backgroundColor={colors.primary}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {(!loading && (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          )) || (
            <Stack.Group>
              {(bearerToken && (
                <Stack.Screen name="Home" component={Home} />
              )) || (
                <>
                  <Stack.Screen name="LogIn" component={LogIn} />
                  <Stack.Screen name="SignUp" component={SignUp} />
                </>
              )}
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
