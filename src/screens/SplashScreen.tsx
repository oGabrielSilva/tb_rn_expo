import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fonts, { colorsDark } from '../utils/template';

const SplashScreen = () => (
  <View style={styles.main}>
    <Text style={styles.icon}>T_B</Text>
    <Text style={styles.sub}>Wellcome</Text>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorsDark.primary,
  },
  icon: {
    color: colorsDark.text,
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.title + 10,
    textAlign: 'center',
  },
  sub: {
    color: colorsDark.text,
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.small,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SplashScreen;
