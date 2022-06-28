import { ReactNode } from 'react';
import { IColors } from './colors';

export interface IUserInfo {
  name: string;
  email: string;
  gender: string;
  avatar: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ITBContext {
  bearerToken: string;
  darkMode: boolean;
  colors: IColors;
  setMode(): void;
  setBearerToken: (value: string) => void; //eslint-disable-line
  userInfo: IUserInfo;
  handlerLogOut(): void;
  setUserInfo(value: IUserInfo): void; //eslint-disable-line
}

export interface IPropsContext {
  children: ReactNode;
}
