import React , {useEffect, useState} from 'react'
import {View, StyleSheet, ActivityIndicator, Text,FlatList } from 'react-native'
import ProductList from './productlist'

const data = require('../../assets/data/products.json')



export default function productContainer(props){
    const [products , setProducts ] = useState([])
    useEffect(()=>{
        setProducts(data)
        return()=>{
            setProducts([])
        }
    },[])
    return(
        
        <View style={styles.listContainer}>
            <Text>Products container </Text>
            <View style={{marginTop:10}}>
            <FlatList 
              
              numColumns={2}
              data = {products}
              renderItem= {({item} )=> <ProductList key={item.id}     item = {item} /> }
          
              keyExtractor = { item => item.name}
            
          

            />
            </View>
        
        </View>
     
    )
}
const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
     
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  
