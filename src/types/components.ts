import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { IRootStackParamsList } from './navigation';

export interface IProps {
  children: ReactNode;
}

export interface IPropsSection extends IProps {
  sty?: StyleProp<ViewStyle>;
}

export interface IPropsAlert extends IProps {
  title: string;
  visible: boolean;
  onRequestClose(): void;
  onConfirm?(): void;
  qtButtons?: 1 | 2;
}

export type ISplashScreenScreenProps = NativeStackScreenProps<
  IRootStackParamsList,
  'SplashScreen'
>;

export type ILogInScreenProps = NativeStackScreenProps<
  IRootStackParamsList,
  'LogIn'
>;

export interface IMenuModalProps {
  visible: boolean;
  onRequestClose(): void;
}

export interface IUserIconProps {
  handlerMenuShow?(): void;
  click?: boolean;
}
