import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TBContext } from '../context';
import { IUserIconProps } from '../types/components';
import { avatar } from '../utils/template';

const UserIcon = ({ handlerMenuShow = () => {}, click }: IUserIconProps) => {
  const { userInfo } = useContext(TBContext);

  return (
    <TouchableOpacity
      onPress={handlerMenuShow}
      activeOpacity={(!click && 0.5) || 1}>
      <Image style={style.profile} source={userInfo.avatar || avatar} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  profile: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
});

export default UserIcon;
