import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'


var {width} = Dimensions.get('window');

const ProductCard = (props) =>{
      const { name, price, image, CountInstock } = props;

      return(

             <View>
                <Image style={style.image}/>
                <View style={style.card}/>
                <Text style={style.title}>
                   {
                    name.length > 15 ? name.substring(0 , 15, -3)
                    + '...' :name
                   }
                    </Text>
                    <Text style={style.price}>
                      ${price}
                    </Text>
                
             </View>
      )
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
        width : width / 2 - 20 -10
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

export default ProductCard
