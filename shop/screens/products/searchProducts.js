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
                    style={{flexDirection:'row',backgroundColor : '#292c3326',
                    marginVertical:5,
                     padding:10,
                }}
                     >

                 <Image style={{width:60, height:50, marginRight : 20}}
                 resizeMode="contain"
                 source={{uri : item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
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
                    <Text style={{alignSelf:'center'}}>
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