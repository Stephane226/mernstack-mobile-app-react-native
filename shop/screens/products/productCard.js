import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'

import  {connect} from 'react-redux'
import * as actions from '../../Redux/actions/cartActions'
var {width} = Dimensions.get('window');

const ProductCard = (props) =>{
      const { name, price, image, CountInstock =2 } = props;

      return(

             <View style={style.container}>
                <Image style={style.image}
                resizeMode="cover"
                source={{uri : image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                />
                <View style={style.card}/>
                <Text style={style.title}>
                   {
                    name.lenght > 15 ? name.substring(0 , 15, -3)
                    + '...' :name
                   }
                    </Text>
                    <Text style={style.price}>
                      ${price}
                    </Text>

                    {
                        CountInstock > 0 ?(
                            <View  style={{marginBottom : 60}}>
                                <Button 
                                style={{backgroundColor:'green', width:100,height:50}}
                                 onPress={()=>{
                                    props.addItemToCart(props)
                                 }}
                                title={'add'} color={'green'} /> 
                             </View>   
                        ) : <Text style={{margonTop : 20}}>Curently Unavailable</Text>
                    }
                
             </View>
      )
}


const mapDispatchToProps = (dispatch) =>{
    return{
      addItemToCart : (product) => dispatch(actions.addToCart({quantity :1, product}))
    }
  }
  



const style = StyleSheet.create({
    container : {
        width: width /2 - 20,
        height: width / 1.7 ,
        padding :10,
        borderRadius :10,
        marginTop : 55,
        marginBottom : 5,
        marginLeft : 10,
        alignItems : 'center',
        elevation :8,
        backgroundColor :'white'
    },
    image:{
        width : width /2 -20 -10,
        height : width / 2- 20 - 90,
        backgroundColor: 'transparent',
       marginTop:-40
    },
    title:{
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize: 14,
    },

    price:{
        color : 'orange',
        textAlign : 'center',
        fontSize: 20,
    }
})

export default connect(null, mapDispatchToProps)(ProductCard)
