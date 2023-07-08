import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";

const Categoryfilter = (props) =>{

    return(
        <View style={{height:50, marginTop:20}}>
        <ScrollView
        bounces={true}
        horizontal={true}
        style={{backgroundColor :'gray'}}
        >
         <View style={{margin:0 ,padding:0,borderRadius:0}}>
            <TouchableOpacity
              key={1}
            >
              <View
               style={[styles.center, {margin:5, width:100,backgroundColor:'red',padding:10,borderRadius:10}]}
              > 
                 <Text style={{color:'white'}}> name</Text>
              </View>  

            </TouchableOpacity>
         </View>

        </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    center: {
        justifyContent:'center'
    }
})

export default Categoryfilter