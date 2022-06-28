import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TBContext } from '../context';
import fonts, { colorsDark } from '../utils/template';

const LogOutButton = () => {
  const { handlerLogOut } = useContext(TBContext);

  return (
    <View>
      <TouchableOpacity style={style.logOut} onPress={handlerLogOut}>
        <Text style={style.text}>Log out</Text>
        <Ionicons
          name="log-in-outline"
          size={20}
          color={colorsDark.secundary}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  logOut: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colorsDark.secundary,
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    textAlign: 'center',
    marginRight: 3,
  },
});

export default LogOutButton;
