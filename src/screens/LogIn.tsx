import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FormLogIn from '../components/FormLogIn';
import Logo from '../components/Logo';
import Section from '../components/Section';
import { TBContext } from '../context';
import { ILogInScreenProps } from '../types/components';
import fonts, { colorsWhite } from '../utils/template';

const LogIn = ({ navigation }: ILogInScreenProps) => {
  const { colors } = useContext(TBContext);

  return (
    <View style={{ ...style.container, backgroundColor: colors.primary }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Logo />
        <Section>
          <Text style={{ ...style.signText, color: colors.text }}>Sign in</Text>
          <Text style={{ ...style.signText2, color: colors.secundary }}>
            Welcome back.
          </Text>
        </Section>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <FormLogIn />
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={style.container2}>
        <Text style={[style.text, { color: colors.text }]}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={style.buttonText}>Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: StatusBar.currentHeight,
  },
  signText: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.title,
  },
  signText2: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    marginTop: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: fonts.sizes.normal,
    fontFamily: fonts.montserrat,
    marginRight: 3,
  },
  buttonText: {
    fontFamily: fonts.montserrat,
    color: colorsWhite.secundary,
    textDecorationLine: 'underline',
    fontSize: fonts.sizes.normal,
  },
});

export default LogIn;
