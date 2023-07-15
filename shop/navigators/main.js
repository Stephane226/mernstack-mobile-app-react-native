import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react';


//stacks
import HomeNavigator from './homeNavigator'
import CartNavigator from './CartNavigator'
import UserNavigator from './UserNavigator';


const Tab = createBottomTabNavigator()
const Main = () => {

    return (
        <Tab.Navigator
            initialRoutesName='Home'
            tabBarOptions={{
                KeyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: 'red',
            

            }}
        >

            <Tab.Screen
                name='Home'
                component={ HomeNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='home'
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    ),
                    headerShown : false
                }}

            />


            <Tab.Screen
                name='Cart'
                component={ CartNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='shopping-scard'
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    ),
                    headerShown : false
                }}

            />


            <Tab.Screen
                name='Admin'
                component={ HomeNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='cog'
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                    ,
                headerShown : false
                }}

            />



            <Tab.Screen
               name='User Navigator'
               component = {UserNavigator}
               options = {{
                tabBarIcon : ({color}) => (
                    <Icon
                       name='user'
                       style={{position : 'relative'}}
                       color = {color}
                       size = {30}
                    />
                ),
                headerShown : false
               }}

            />


        </Tab.Navigator>

    )
}


export default Main