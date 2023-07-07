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
        <View>
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