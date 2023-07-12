import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    SafeAreaView
} from 'react-native'


import  {connect} from 'react-redux'


const Cart = (props) =>{
    return(
          <View style={styles.container}>
           {
            props.cartItems.map( x  => {
                return(
                    <Text> {x.product.name}</Text>
                )
            })
           }
          </View>  

    )
}

const mapStateToProps = (state) =>{
  const {cartItems} = state
  return{
    cartItems : cartItems
  }
}


const styles = StyleSheet.create({
    container : {
        width : '100%',
        flexDirection : 'row',
        alignContent : 'center',
        justifyContent : 'center',
        padding: 20,
        marginTop:0
    }
})

export default connect(mapStateToProps, null)(Cart)