import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet,Image, Text, View ,TouchableOpacity} from 'react-native';

import React from 'react';



 const SearchedProduct = (props) =>{

    const {productsFiltered } = props;

    return(
        <View>
            { 
            productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <View 
                    key ={item._id}
                    avatar
                     >

                 <Image style={{width:20, height:20}}
                 resizeMode="cover"
                 source={{uri : image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                 /> 

                 <View>
                    <Text>
                     {item.name}
                    </Text>
                    <Text>
                     {item.description}
                    </Text>
                 </View>

                 </View>
                ))
            ) : (
                <View>
                    <Text style={{alignSelf:'CENTER'}}>
                    No product match...
                    </Text>
                 </View>
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    center : {
        justifyContent:'center',
        alignItems : 'center'
    }
})

export default SearchedProduct