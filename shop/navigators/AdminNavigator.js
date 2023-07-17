import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

//screens
import Orders from "../screens/Admin/Orders";
import Products from "../screens/Admin/Products";
import ProductForm from "../screens/Admin/ProductForm";
import Categories from "../screens/Admin/Categories";

const Stack = createStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: "Products",
        }}
      />

      <Stack.Screen name="Categories" component={Categories} />

      <Stack.Screen name="Orders" component={Orders} />

      <Stack.Screen name="ProductForm" component={ProductForm} />
    </Stack.Navigator>
  );
}


export default function AdminNavigator(){
    return <Mystack />
}