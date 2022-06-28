import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useRef, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import api from '../api/api';
import { TBContext } from '../context';
import userInfoKey, { bearerTokenKey } from '../utils/keys';
import fonts from '../utils/template';
import Alert from './Alert';
import Section from './Section';

const FormSignUp = () => {
  const { colors, setBearerToken, setUserInfo } = useContext(TBContext);
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'M' | 'F' | 'O'>('F');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState('');

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(() => {
    if (email.includes('@') && password.length >= 8) {
      setLoading(true);
      setAlertVisible(true);
      api()
        .account()
        .signup({
          email: email.trim(),
          password: password.trim(),
          gender,
          name: name.trim(),
          device: Platform.OS,
        })
        .then((r) => {
          if (r.data.session.id) {
            setUserInfo(r.data.user);
            AsyncStorage.setItem(userInfoKey, JSON.stringify(r.data.user)).then(
              () => {
                AsyncStorage.setItem(
                  bearerTokenKey,
                  'Bearer '.concat(r.data.session.id),
                ).then(() => setBearerToken(r.data.session.id));
              },
            );
          }
        })
        .catch((err) => {
          if (err.response) {
            setMessageError(' '.concat(err.response.data.message));
            setLoading(false);
          }
        });
    }
  }, [email, password, setBearerToken, gender]);

  return (
    <View>
      <Section>
        <Text style={{ ...style.label, color: colors.text }}>Name: </Text>
        <TextInput
          style={{
            ...style.input,
            color: colors.text,
            borderColor: (name.length > 1 && colors.secundary) || colors.text,
            backgroundColor: colors.primary,
          }}
          value={name}
          keyboardType="default"
          autoCapitalize="words"
          onChangeText={(val) => setName(val)}
          autoComplete="name"
          onSubmitEditing={() => emailRef.current?.focus()}
          selectionColor={colors.secundary}
          returnKeyType="go"
        />
        <Text style={{ ...style.label, color: colors.text }}>Email: </Text>
        <TextInput
          ref={emailRef}
          style={{
            ...style.input,
            color: colors.text,
            borderColor:
              (email.includes('@') &&
                email.split('@')[1].length > 1 &&
                colors.secundary) ||
              colors.text,
            backgroundColor: colors.primary,
          }}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(val) => setEmail(val)}
          autoComplete="email"
          onSubmitEditing={() => passwordRef.current?.focus()}
          selectionColor={colors.secundary}
          returnKeyType="go"
        />
        <Text style={{ ...style.label, color: colors.text }}>Password: </Text>
        <TextInput
          ref={passwordRef}
          style={{
            ...style.input,
            color: colors.text,
            borderColor:
              (password.length > 7 && colors.secundary) || colors.text,
            backgroundColor: colors.primary,
          }}
          value={password}
          onChangeText={(val) => setPassword(val)}
          secureTextEntry
          selectionColor={colors.secundary}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <Text style={{ ...style.label, color: colors.text }}>Gender: </Text>
        <View style={style.selectContainer}>
          <View>
            <TouchableOpacity onPress={() => setGender('M')}>
              <Text
                style={[
                  style.selectText,
                  {
                    color: (gender === 'M' && colors.secundary) || colors.text,
                    fontFamily:
                      (gender === 'M' && fonts.montserratBold) ||
                      fonts.montserrat,
                  },
                ]}>
                Male
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setGender('F')}>
              <Text
                style={[
                  style.selectText,
                  {
                    color: (gender === 'F' && colors.secundary) || colors.text,
                    fontFamily:
                      (gender === 'F' && fonts.montserratBold) ||
                      fonts.montserrat,
                  },
                ]}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setGender('O')}>
              <Text
                style={[
                  style.selectText,
                  {
                    color: (gender === 'O' && colors.secundary) || colors.text,
                    fontFamily:
                      (gender === 'O' && fonts.montserratBold) ||
                      fonts.montserrat,
                  },
                ]}>
                Other
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Section>
      <Section>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{ ...style.button, backgroundColor: colors.secundary }}>
          <Text
            style={{
              fontFamily: fonts.montserratBold,
              fontSize: fonts.sizes.normal,
              marginTop: 0,
              color: colors.text,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </Section>
      <Alert
        visible={alertVisible}
        onRequestClose={() => setAlertVisible(false)}
        title={(loading && 'Waiting') || 'Some error occurred'}
        qtButtons={(!loading && 1) || undefined}>
        {(loading && (
          <View style={{ marginVertical: 15 }}>
            <ActivityIndicator size="small" color={colors.text} />
          </View>
        )) || (
          <Text style={[{ color: colors.text, fontFamily: fonts.montserrat }]}>
            Oopss...
            {messageError}
          </Text>
        )}
      </Alert>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    padding: 10,
    paddingVertical: 3,
    borderRadius: 10,
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    marginBottom: 5,
  },
  label: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    marginVertical: 15,
  },
  button: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  selectText: {
    fontSize: fonts.sizes.normal,
  },
});

export default FormSignUp;
