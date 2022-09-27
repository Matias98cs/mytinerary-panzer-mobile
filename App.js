import React from 'react';
import 'react-native-gesture-handler';
import MyDrawer from './src/Navigation/Drawer'
import { NavigationContainer } from '@react-navigation/native';
import store from './store'
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    </Provider>
  );
}