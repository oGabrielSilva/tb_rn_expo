import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TBContext } from '../context';
import { colorsDark } from '../utils/template';

const Home = () => {
  const { handlerLogOut } = useContext(TBContext);

  return (
    <View>
      <TouchableOpacity style={style.logOut} onPress={handlerLogOut}>
        <Text style={{ color: colorsDark.text }}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  logOut: {
    backgroundColor: colorsDark.secundary,
    padding: 20,
  },
});

export default Home;
