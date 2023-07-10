import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tab'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react';

const Tab = createBottomTabNavigator()
const Main = () => {

    return (
        <Tab.Navigator
            initialRoutesName='Home'
            tabBarOptions={{
                KeyboardHidesTabBar: true,
                showLabel: false,
                activetINcOLOR: 'red'

            }}
        >

            <Tab.Screen
                name='Home'
                component={ }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='home'
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}

            />


            <Tab.Screen
                name='Cart'
                component={ }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='shopping-card'
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}

            />


            <Tab.Screen
                name='Admin'
                component={ }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='cog'
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}

            />


            <Tab.Screen
               name='User'
               component = {}
               options = {{
                tabBarIcon : ({color}) => (
                    <Icon
                       name='user'
                       style={{position : 'relative'}}
                       color = {color}
                       size = {30}
                    />
                )
               }}

            />

        </Tab.Navigator>

    )
}


export default Main