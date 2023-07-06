import React , {useEffect, useState} from 'react'
import {View, StyleSheet, ActivityIndicator, Text,FlatList } from 'react-native'
import Productlist from './productlist'

const data = require('../../assets/data/products.json')
export default function productContainer(){
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
            <View style={{marginTop:100}}>
            <FlatList 
              data = {products}
              renderItem= {({item })=> <Text> {item.brand}</Text> }
              keyExtrator = {item => item.name}
              key={item.id}
          

            />
            </View>
        
        </View>
    )
}