import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TBContext } from '../context';
import fonts from '../utils/template';

const Logo = () => {
  const { colors, setMode } = useContext(TBContext);

  return (
    <TouchableOpacity onPress={setMode}>
      <Text style={{ ...style.icon, color: colors.text }}>T_B</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  icon: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.sub,
    marginBottom: 10,
  },
});

export default Logo;
