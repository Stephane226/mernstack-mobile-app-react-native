import { StyleSheet,  View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

//screens
import ProductContainer from '../screens/products/ProductContainer'
import SingleProduct from '../screens/products/singleProduct';

const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
             <Stack.Screen
                name='Homes'
                component = {ProductContainer}
                options={{
                    headerShown : false,
                }}
              />


            <Stack.Screen
                name='Product Details'
                component = {SingleProduct}
                options={{
                    headerShown : false,
                }}
              />


        </Stack.Navigator>

        
    )
}

export default function HomeNavigator(){
    return <MyStack />
}