import React ,{ useEffect, 
    useState }from "react";
  import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    SafeAreaView,
    Button,
   
  } from "react-native";
  
import Checkout from "../screens/card/checkout/checkout";
import Payment from "../screens/card/checkout/payment";
import Confirm from "../screens/card/checkout/connfirm";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator()

  function MyTabs() {
    return(
        <Tab.Navigator>
             <Tab.Screen name='Shipping' component={Checkout} />
             <Tab.Screen name='Payment' component={Payment} />
             <Tab.Screen name='Confirm' component={Confirm} />
        </Tab.Navigator>
    )
  }


  export default function CheckoutNavigator(){
    return <MyTabs />
  }