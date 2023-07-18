import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  ScrollView,
  Button
} from "react-native";
import FormContainer from "../../shared/forms/formContainer";
import Input from "../../shared/forms/input";
import Error from "../../shared/Error";
import  loginUser  from "../../Context/actions/auth.actions";
import authGlobal from "../../Context/store/auth.global";


const Login = (props) =>{

  
    const context = useContext(authGlobal)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
      if (!context.stateUser.isAuthenticated) {
        props.navigation.navigate("userprofile");
      }
    }, [context.stateUser.isAuthenticated]);


    const handleSubmit = () => {
        const user = {
          email : email,
          password : password,
        };
    
        if (email === "" || password === "") {
          setError("Please fill in your credentials");
        
        } else {
          loginUser(user , context.dispatch)
        console.log('success')

        }
      };


    return(
        <FormContainer title={"Login"}>
        <Input
          placeholder={"Enter Email"}
          name={"email"}
          id={"email"}
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <Input
          placeholder={"Enter Password"}
          name={"password"}
          id={"password"}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
          <Button  
            title='Login'
          onPress={() => handleSubmit()}>
           
          </Button>
        </View>
        <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
          <Text style={styles.middleText}>Don't have an account yet?</Text>
          <Button
          title='Register'
          onPress={() => props.navigation.navigate("Register")}>
         
          </Button>
        </View>
      </FormContainer>
    )
}
const styles = StyleSheet.create({
    buttonGroup: {
      width: "80%",
      alignItems: "center",
    },
    middleText: {
      marginBottom: 20,
      alignSelf: "center",
    },
  });

  
export default Login