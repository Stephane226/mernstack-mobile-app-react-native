import { StyleSheet,  View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

//screens
import ProductContainer from '../screens/products/ProductContainer'
import SingleProduct from '../screens/products/singleProduct';
import Cart from '../screens/card/cart'

import CheckoutNavigator from './CheckoutNavigator';


const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
             <Stack.Screen
                name='cart'
                component = {Cart}
                options={{
                    headerShown : false,
                }}
              />


            <Stack.Screen
                name='Checkout'
                component = {CheckoutNavigator}
                options={{
                    headerShown : false,
                }}
              />




        </Stack.Navigator>

        
    )
}

export default function CartNavigator(){
    return <MyStack />
}