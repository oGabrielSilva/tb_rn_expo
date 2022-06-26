import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IColors } from '../types/colors';
import { IPropsContext, ITBContext, IUserInfo } from '../types/context';
import userInfoKey, { bearerTokenKey, darkModeKey } from '../utils/keys';
import { colorsDark, colorsWhite } from '../utils/template';

export const TBContext = createContext<ITBContext>({} as ITBContext);

const TBContextProvider = ({ children }: IPropsContext) => {
  const [bearerToken, setBearerToken] = useState('');
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
  const [darkMode, setDarkMode] = useState(false);
  const [colors, setColors] = useState({} as IColors);

  useEffect(() => setColors(darkMode ? colorsDark : colorsWhite), [darkMode]);

  useEffect(() => {
    AsyncStorage.getItem(bearerTokenKey).then((token) => {
      if (token) {
        AsyncStorage.getItem(userInfoKey).then((object) => {
          if (object) setUserInfo(JSON.parse(object));
          setBearerToken('Bearer '.concat(token));
        });
      }
    });
    AsyncStorage.getItem(darkModeKey).then((value) => {
      if (value) setDarkMode(true);
    });
  }, []);

  const setMode = useCallback(() => {
    setDarkMode((v) => {
      AsyncStorage.setItem(darkModeKey, (!v && '1') || '');
      return !v;
    });
  }, []);

  const handlerLogOut = () => {
    const func = async () => {
      await AsyncStorage.removeItem(bearerTokenKey);
      await AsyncStorage.removeItem(userInfoKey);
    };

    func().then(() => setBearerToken(''));
  };

  const state: ITBContext = useMemo(
    () => ({
      bearerToken,
      darkMode,
      setMode,
      setBearerToken,
      colors,
      userInfo,
      handlerLogOut,
    }),
    [bearerToken, darkMode, setMode, colors, userInfo],
  );

  return <TBContext.Provider value={state}>{children}</TBContext.Provider>;
};

export default TBContextProvider;
