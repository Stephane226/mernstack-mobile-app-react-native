import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './shared/header'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { LogBox} from 'react-native';
LogBox.ignoreAllLogs(true)

//navigators
import Main from './navigators/main'

//redux
import { Provider } from 'react-redux';
import store from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>  
         <Header />
      <Main/>
    </NavigationContainer>
    </Provider>
  );
}


