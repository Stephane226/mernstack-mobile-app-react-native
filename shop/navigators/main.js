import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react';


//stacks
import HomeNavigator from './homeNavigator'



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
                component={ HomeNavigator }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='shopping-card'
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
               name='User'
               component = {HomeNavigator}
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