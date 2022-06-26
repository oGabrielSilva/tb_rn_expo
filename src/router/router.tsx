import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import { TBContext } from '../context';
import LogIn from '../screens/LogIn';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import { IRootStackParamsList } from '../types/navigation';
import SignUp from '../screens/SignUp';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<IRootStackParamsList>();
const screenOptions: NativeStackNavigationOptions = { headerShown: false };

const Router = () => {
  const { bearerToken, darkMode, colors } = useContext(TBContext);

  return (
    <>
      <StatusBar
        barStyle={(darkMode && 'light-content') || 'dark-content'}
        backgroundColor={colors.primary}
      />
      <NavigationContainer>
        {(!bearerToken && (
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )) || (
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Article" component={SplashScreen} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default Router;
