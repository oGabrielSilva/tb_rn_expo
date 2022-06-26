import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FormSignUp from '../components/FormSignUp';
import Logo from '../components/Logo';
import Section from '../components/Section';
import { TBContext } from '../context';
import fonts from '../utils/template';

const SignUp = () => {
  const { colors } = useContext(TBContext);

  return (
    <View style={[style.main, { backgroundColor: colors.primary }]}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Logo />
        <Section>
          <Text style={{ ...style.signText, color: colors.text }}>Sign up</Text>
          <Text style={{ ...style.signText2, color: colors.secundary }}>
            Create your account.
          </Text>
        </Section>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <FormSignUp />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  main: { flex: 1, paddingHorizontal: 25, paddingTop: StatusBar.currentHeight },
  signText: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.title,
  },
  signText2: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    marginTop: 10,
  },
});

export default SignUp;
