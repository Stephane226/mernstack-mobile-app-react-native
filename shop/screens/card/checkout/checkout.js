import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  Button,
} from "react-native";
import FormContainer from "../../../shared/forms/formContainer";
import Input from "../../../shared/forms/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";

import {connect} from "react-redux";

function Checkout(props) {
  const [orderItems, setOrderItems] = useState('demo');
  const [address, setAddress] = useState('demo ');
  const [address2, setAddress2] = useState('demo ');
  const [city, setCity] = useState('demo ');
  const [zip, setZip] = useState('demo ');
  const [country, setCountry] = useState('demo ');
  const [phone, setPhone] = useState('demo ');
  const [user, setUser] = useState('demo ');

  //picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "France", value: "France" },
    { label: "usa", value: "usa" },
  ]);

  useEffect(() => {
    setOrderItems(props.cartItems);


    return () => {
      setOrderItems();
    };
  }, []);

  const checkOut = () => {
  
    let order = {
        city,
        dateOrdered: Date.now(),
        orderItems,
        phone,
        shippingAddress1: address,
        shippingAddress2: address2,
        status: "3",
        user,
        zip,
    }
    console.log("orders", order)
    props.navigation.navigate("Confirm", {order})
}


  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Shipping Address"}>
        <Input
          placeholder={"Phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Shipping Address 1"}
          name={"ShippingAddress1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={"Shipping Address 2"}
          name={"ShippingAddress2"}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={"Zip Code"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text) => setZip(text)}
        />
         <View style={{ width: "80%", alignItems: "center" }}>
         <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}

        />
        </View>
       
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Confirm" onPress={() => checkOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
}



const mapStateToProps = (state) =>{
  const {cartItems} = state;
  return{
    cartItems : cartItems
  }
}
export default connect(mapStateToProps)(Checkout)
