import React, {useState, useEffect} from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'

const SingleProduct = (props) =>{

    const [item, setItem] = useState(props.route.params.item)
    const [avaibility, setAvaibility] = useState()

    return(
    
        <View style={styles.container}>
          <ScrollView style={{marginBottom: 80, padding:5}}>
                <View>
                    <Image 
                       source={{
                        uri: item.image ? item.image : ''
                       }}

                       resizeMode = 'contain'
                       style={styles.image}
                    />
                </View>
          </ScrollView>
        </View>
 
    )


}

const styles = StyleSheet.create({
    container :{
        position:'relative',
        height : '100%',
    },

    imageContainer : {
        backgroundColor : 'white',
        padding:0,
        margin:0
    },
    image :{
        width:'100%',
        height:250
    }
})

export default SingleProduct