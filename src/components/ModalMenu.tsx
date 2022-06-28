import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useMemo } from 'react';
import {
  Modal,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { TBContext } from '../context';
import { IMenuModalProps } from '../types/components';
import fonts, { colorsDark } from '../utils/template';
import LogOutButton from './LogOutButton';
import Section from './Section';
import UserIcon from './UserIcon';

const MenuModal = ({ visible, onRequestClose }: IMenuModalProps) => {
  const { colors, darkMode, userInfo, setMode } = useContext(TBContext);

  const styleView: StyleProp<ViewStyle> = useMemo(
    () => ({
      flex: 1,
      borderRadius: 8,
      backgroundColor: colors.primary,
      ...((darkMode && {
        borderWidth: 0.5,
        borderColor: colors.text,
      }) ||
        {}),
    }),
    [colors],
  );

  const styleScrollView: StyleProp<ViewStyle> = useMemo(
    () => ({
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: colors.textGray,
      paddingTop: 20,
    }),
    [colors, darkMode],
  );

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType="slide">
      {visible && !darkMode && (
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.3)" />
      )}
      <View style={style.main}>
        <Section sty={{ flex: 1, marginVertical: 100 }}>
          <View style={styleView}>
            <View style={style.section1}>
              <TouchableOpacity onPress={onRequestClose}>
                <Ionicons
                  name="md-close-outline"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
              <Text style={[style.section1Logo, { color: colors.text }]}>
                T_B
              </Text>
              <Ionicons
                name="md-close-outline"
                size={24}
                color={colors.primary}
              />
            </View>
            <Section
              sty={{
                paddingTop: 0,
                marginVertical: 0,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <UserIcon click />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={[style.text, { color: colors.text }]}
                  numberOfLines={1}>
                  {userInfo.name}
                </Text>
                <Text
                  style={[
                    [style.text, { color: colors.text }],
                    { fontSize: fonts.sizes.small },
                  ]}
                  numberOfLines={1}>
                  {userInfo.email}
                </Text>
              </View>
            </Section>
            <ScrollView style={styleScrollView}>
              <Section sty={{ paddingVertical: 0, marginVertical: 15 }}>
                <View>
                  <TouchableOpacity>
                    <Text style={[style.text, { color: colors.text }]}>
                      Edit profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </Section>
              <Section sty={{ paddingVertical: 0, marginVertical: 15 }}>
                <View>
                  <TouchableOpacity>
                    <Text style={[style.text, { color: colors.text }]}>
                      Settings
                    </Text>
                  </TouchableOpacity>
                </View>
              </Section>
              <Section sty={{ paddingVertical: 0, marginVertical: 15 }}>
                <View>
                  <TouchableOpacity>
                    <Text style={[style.text, { color: colors.text }]}>
                      Blocked
                    </Text>
                  </TouchableOpacity>
                </View>
              </Section>
              <Section sty={{ paddingVertical: 0, marginVertical: 15 }}>
                <View>
                  <TouchableOpacity>
                    <Text style={[style.text, { color: colors.text }]}>
                      Contact
                    </Text>
                  </TouchableOpacity>
                </View>
              </Section>
              <Section sty={{ paddingVertical: 0, marginVertical: 15 }}>
                <View>
                  <TouchableOpacity>
                    <Text style={[style.text, { color: colors.text }]}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </Section>
              <Section sty={{ paddingVertical: 0, marginVertical: 15 }}>
                <View>
                  <TouchableOpacity>
                    <Text style={[style.text, { color: colors.text }]}>
                      Terms Of Service
                    </Text>
                  </TouchableOpacity>
                </View>
              </Section>
              <Section sty={{ paddingVertical: 0, marginVertical: 0 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[style.text, { color: colors.text }]}>
                    Dark mode
                  </Text>
                  <Switch
                    trackColor={{
                      false: colors.secundary,
                      true: colors.secundary,
                    }}
                    thumbColor={colorsDark.text}
                    ios_backgroundColor={colorsDark.secundary}
                    onValueChange={setMode}
                    value={darkMode}
                  />
                </View>
              </Section>
            </ScrollView>
            <View
              style={{
                padding: 10,
              }}>
              <LogOutButton />
            </View>
          </View>
        </Section>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  main: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  section1Logo: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.sub,
  },
  text: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
  },
});

export default MenuModal;
