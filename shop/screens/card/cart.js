import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
} from "react-native";

import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <>
   
      {props.cartItems.length ? (
        <View style={styles.container}>
          {props.cartItems.map((x) => {
            return (
              <View style={{flex:1,width:'100%',backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginVertical:5,paddingVertical:10,}}>
                 <Image style={{width:60, height:60,borderRadius:'50%'}}
                resizeMode="cover"
                source={{uri : x.product.image?  x.product.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                />
                 <Text>{x.product.name}</Text>
                 <Text>{x.product.price}</Text>
              </View>
            )
          })}
        </View>
      ) : (
        <View>
            <Text>cart is empty...</Text>
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:500,
    flexDirection: 'column',
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 0,
  },
});

export default connect(mapStateToProps, null)(Cart);
