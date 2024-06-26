import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../shared/forms/formContainer";
import Input from "../../shared/forms/input";
import Error from '../../shared/Error';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";

import axios from "axios";
import baseURL from "../../assets/common/baseUrl";



const Register = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
  
    const registerUser = () => {
      if (email === "" || name === "" || phone === "" || password === "") {
        setError("Please fill in the form correctly");
      }
  
      let user = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        isAdmin: false,
      };


      axios
        .post(`${baseURL}users`, user)
        .then((res) => {
          if (res.status == 200) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Registration Succeeded",
              text2: "Please Login into your account",
            });
            setTimeout(() => {
              props.navigation.navigate("Login");
            }, 3000);
          }
        })

        .catch((error) => {
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Something went wrong",
            text2: "Please try again",
          });
        });
    };
  
    return (
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
      >
        <FormContainer title={"Register"}>
          <Input
            placeholder={"Email"}
            name={"email"}
            id={"email"}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
          <Input
            placeholder={"Name"}
            name={"name"}
            id={"name"}
            onChangeText={(text) => setName(text)}
          />
          <Input
            placeholder={"Phone Number"}
            name={"phone"}
            id={"phone"}
            keyboardType={"numeric"}
            onChangeText={(text) => setPhone(text)}
          />
          <Input
            placeholder={"Password"}
            name={"password"}
            id={"password"}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.buttonGroup}>
            {error ? <Error message={error} /> : null}
          </View>
          <View>
            <Button  title='Register' onPress={() => registerUser()} />
          </View>
          <View>
            <Button
              onPress={() => props.navigation.navigate("Login")}
              title='login' 
            />
           
          </View>
        </FormContainer>
      </KeyboardAwareScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    buttonGroup: {
      width: "80%",
      margin: 10,
      alignItems: "center",
    },
  });
  
  export default Register;