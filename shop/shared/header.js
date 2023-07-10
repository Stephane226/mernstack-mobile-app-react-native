import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    SafeAreaView
} from 'react-native'

const Header = () =>{
    return(
          <SafeAreaView style={styles.header}>
            <Image source={require('../assets/logo32.png')}
            resizeMode="cover"
            style={{height : 30,width:90}}
            />
          </SafeAreaView>  

    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        flexDirection : 'row',
        alignContent : 'center',
        justifyContent : 'center',
        padding: 20,
        marginTop:0
    }
})

export default Header