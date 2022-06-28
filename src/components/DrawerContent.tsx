import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { memo } from 'react';
import { Text, View } from 'react-native';

const DrawerContent = () => (
  <DrawerContentScrollView>
    <View>
      <Text>Olá</Text>
    </View>
  </DrawerContentScrollView>
);

export default memo(DrawerContent);
