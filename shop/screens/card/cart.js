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
import * as actions from '../../Redux/actions/cartActions'
import { connect } from "react-redux";
import {SwipelistView} from 'react-native-swipe-list-view'
const data = require("../../assets/data/products.json");

const Cart = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [])
  var total = 0
  props.cartItems.forEach(element => {
    total += element.product.price
  });
  return (
    <>
   
      {props.cartItems.length ? (
          <View style={styles.container1}> 
        <View style={styles.container}>
          {props.cartItems.map((x) => {
            return (
              <View style={{flex:1,width:'100%',backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:5,paddingVertical:10,}}>
                 <Image style={{width:60, height:60,borderRadius:'50%'}}
                resizeMode="cover"
                source={{uri : x.product.image?  x.product.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                />
                 <Text>{x.product.name}</Text>
                 <Text>{x.product.price}</Text>
               <Button
                   title='Remove'
                  onPress={ () => {
                    const itemToRemove = () => {
                      return products.filter(item => item._id.$oid == x.product._id.$oid)
                      }
                     // console.log(itemToRemove())
                    props.removeFromCart(itemToRemove()[0])
                   // console.log(products.filter(item => item._id.$oid == x.product._id.$oid))
                   console.log(itemToRemove()[0]._id.$oid)
                
                  }}

                 /> 
              </View>
              
            )
          })}
        </View> 
        <View style={{flex:1,width:'90%',    marginHorizontal:'5%',backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginVertical:5,paddingVertical:5}}>
              <Text style={{color:'red'}}> $ {total}</Text>
                 <Button
                   title='Clear'
                   onPress={ () =>{
                    props.clearCart()
                   }}
                 />
                  <Button
                   title='Checkout'

                  onPress={ () => {
                   props.navigation.navigate('Checkout')
                  }}
                  />

        </View>
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

const mapDispatchToProps = (dispatch) =>{
  return{
    clearCart : () => dispatch(actions.clearCart()),
    removeFromCart : (item) => dispatch(actions.removeFromCart(item))
  }
}
const styles = StyleSheet.create({
  container1: {
    width: "100%",
    height:'100%',
    flexDirection: 'column',
    alignContent: "center",
    justifyContent: "center",
   
  },
    container: {
    width: "100%",
    height:'90%',
    flexDirection: 'column',
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 0,

  },
  containerTotal:{

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
