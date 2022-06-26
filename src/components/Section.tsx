import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IPropsSection } from '../types/components';

const Section = ({ children, sty = {} }: IPropsSection) => (
  <View style={[style.main, sty]}>{children}</View>
);

const style = StyleSheet.create({
  main: { marginVertical: 25, padding: 25 },
});

export default Section;
