import React, { useContext, useState, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from "@react-navigation/native"
//import authGlobal from '../../Context/store/auth.global';

import axios from "axios"
import baseURL from "../../assets/common/baseUrl"


const UserProfile = (props) => {
    const context = useContext(authGlobal)
    const [userProfile, setUserProfile] = useState()
    const [orders, setOrders] = useState()


        useEffect(() => {
        if (
            context.stateUser.isAuthenticated === false || 
            context.stateUser.isAuthenticated === null
        ) {
            props.navigation.navigate("Login")
        }},[context.stateUser.isAuthenticated])

       
    return (
    
               <View style={{ marginTop: 20 }}>
                    <Text style={{ margin: 10 }}>
                     user profile
                    </Text>
                    
               </View>
            
           
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    subContainer: {
        alignItems: "center",
        marginTop: 60
    },
    order: {
        marginTop: 20,
        alignItems: "center",
        marginBottom: 60
    }
})

export default UserProfile;