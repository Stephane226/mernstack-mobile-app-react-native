import React ,{ useEffect,  useState }from "react";
  import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    SafeAreaView,
    Button, ScrollView

   
  } from "react-native";
  var { width, height } = Dimensions.get("window");


  function Confirm(props) {
    const confirm = props.route.params;
    console.log(props.route.params)
 
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
          {props.route.params ? (
            <View style={{ borderWidth: 1, borderColor: "orange" }}>
              <Text style={styles.title}>Shipping to:</Text>
              <View style={{ padding: 8 }}>
                <Text>Address: {props.route.params.order.shippingAddress1}</Text>
                <Text>Address2: {props.route.params.order.shippingAddress2}</Text>
                <Text>City: {props.route.params.order.city}</Text>
                <Text>Zip Code: {props.route.params.order.zip}</Text>
                <Text>Country: {props.route.params.order.country}</Text>
              </View>
             
            </View>
          ):(
            <View style={{ alignItems: "center", margin: 20 }}>
            <Text>no data </Text>
          </View>
          )}
         
          <View style={{ alignItems: "center", margin: 20 }}>
            <Button title={"Place order"}  />
          </View>
        </View>
      </ScrollView>
    )
  }

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
export default Confirm