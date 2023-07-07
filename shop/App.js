import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './shared/header'
import React from 'react';
//screens
import ProductContainer from './screens/products/ProductContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
