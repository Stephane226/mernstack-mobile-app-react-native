import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './shared/header'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { LogBox} from 'react-native';
import {Toast}  from 'react-native-toast-message/lib/src/Toast';
LogBox.ignoreAllLogs(true)

//navigators
import Main from './navigators/main'


//conntext api
import Auth from './Context/store/auth';

//redux
import { Provider } from 'react-redux';
import store from './Redux/store';

export default function App() {
  return (
    <Auth>
  <Provider store={store}>
    <NavigationContainer>  
         <Header />
      <Main/>
      <Toast/>
    </NavigationContainer>
    </Provider>
    </Auth>
    
  );
}


