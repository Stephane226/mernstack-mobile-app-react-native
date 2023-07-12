import { StatusBar } from 'expo-status-bar';
import { Dimensions, onPress ,StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

import React from 'react';
import ProductCard from './productCard';
var {width} = Dimensions.get('window')


  const ProductList = (props)=> {
    const {item} = props
  return (
    <TouchableOpacity 
      style={{width : '50%'}}
       
      onPress={()=>{
        console.log('press')
          props.navigation.navigate('Product Details',{item:item})
       }}
      >
       <View style={{ width :width/2 , backgroundColor: 'gainsboro'}}>
           <ProductCard {...item} />
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


export default ProductList
