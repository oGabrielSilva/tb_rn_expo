import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../components/Logo';
import MenuModal from '../components/ModalMenu';
import Section from '../components/Section';
import UserIcon from '../components/UserIcon';
import { TBContext } from '../context';

const Home = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const { colors } = useContext(TBContext);

  const handlerMenuShow = useCallback(() => setVisibleMenu((v) => !v), []);

  return (
    <View style={[style.main, { backgroundColor: colors.primary }]}>
      <Section
        sty={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Logo />
        <UserIcon handlerMenuShow={handlerMenuShow} />
      </Section>
      <MenuModal visible={visibleMenu} onRequestClose={handlerMenuShow} />
    </View>
  );
};

const style = StyleSheet.create({
  main: { flex: 1 },
});

export default Home;
