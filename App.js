import React from 'react';
import 'react-native-gesture-handler';
import MyDrawer from './src/Navigation/Drawer'
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}