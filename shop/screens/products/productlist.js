import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

import React from 'react';
var {width} = Dimensions.get('window')


 const ProductList = (props)=> {
  return (
    <TouchableOpacity style={{width : '50%'}}>
       <View style={{ width :width/2 , backgroundColor: 'gainsboro'}}>
       
       </View>
    </TouchableOpacity>
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
