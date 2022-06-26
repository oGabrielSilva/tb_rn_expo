import React, { useContext } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TBContext } from '../context';
import { IPropsAlert } from '../types/components';
import fonts from '../utils/template';

const Alert = ({
  children,
  title,
  visible,
  qtButtons,
  onConfirm,
  onRequestClose,
}: IPropsAlert) => {
  const { colors, darkMode } = useContext(TBContext);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}>
      <View style={style.main}>
        <View
          style={[
            style.container,
            {
              backgroundColor: colors.primary,
              borderColor: (darkMode && colors.text) || colors.primary,
            },
          ]}>
          <View>
            <Text style={[style.title, { color: colors.text }]}>{title}</Text>
          </View>
          <View>{children}</View>
          {qtButtons && (
            <View style={style.buttonContainer}>
              {qtButtons === 2 && (
                <TouchableOpacity
                  onPress={onRequestClose}
                  style={[style.button]}>
                  <Text style={[style.buttonTxt, { color: colors.text }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={onConfirm || onRequestClose}
                style={[
                  style.button,
                  { width: (qtButtons === 2 && '50%') || '100%' },
                ]}>
                <Text style={[style.buttonTxt, { color: colors.text }]}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 25,
    paddingBottom: 0,
    width: Dimensions.get('screen').width - 50,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  title: {
    fontFamily: fonts.montserratMedium,
    fontSize: fonts.sizes.title,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: { width: '50%', paddingVertical: 15 },
  buttonTxt: {
    textAlign: 'center',
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
  },
});

export default Alert;
