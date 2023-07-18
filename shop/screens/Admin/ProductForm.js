import React, { useState, useEffect } from "react"
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
    ,Button
} from "react-native"
import FormContainer from "../../shared/forms/formContainer"
import Input from "../../shared/forms/input"
import Error from "../../shared/Error"
import Icon from "react-native-vector-icons/FontAwesome"
import Toast from "react-native-toast-message"
import baseURL from "../../assets/common/baseUrl"
import axios from "axios"
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker"

const ProductForm = (props) => {

    const [pickerValue, setPickerValue] = useState();
    const [brand, setBrand] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [mainImage, setMainImage] = useState();
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);
    const [token, setToken] = useState();
    const [err, setError] = useState();
    const [countInStock, setCountInStock] = useState();
    const [rating, setRating] = useState(0);
    const [isFeatured, setIsFeature] = useState(false);
    const [richDescription, setRichDescription] = useState();
    const [numReviews, setNumReviews] = useState(0);
    const [item, setItem] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [arrayCategories, setArrayCategories] = useState([]);
 
   

   useEffect(()=>{
    axios.get(`${baseURL}categories`)
    .then((res) => setCategories(res.data))
    .catch((err) => alert('error while loading categories'))

    

    const categoriesWrapper = ()=>{
      categories.map((c) =>{
          return  arrayCategories.push({ label: c.name , value: c.name })
       })
    }
    categoriesWrapper()

    setItem(arrayCategories)

   }, [])


   const [items, setItems] = useState([
 
  ]);
 
 

    return(

        <FormContainer title="Add Product">
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: mainImage}}/>
            <TouchableOpacity onPress={null} style={styles.imagePicker}>
                <Icon style={{ color: "white"}} name="camera"/>
            </TouchableOpacity>
        </View>
        <View style={styles.label}>
            <Text style={{ textDecorationLine: "underline"}}>Brand</Text>
        </View>
        <Input 
         placeholder="Brand"
         name="brand"
         id="brand"
         value={brand}
         onChangeText={(text) => setBrand(text)}
        />
        <View style={styles.label}>
            <Text style={{ textDecorationLine: "underline"}}>Name</Text>
        </View>
        <Input 
         placeholder="Name"
         name="name"
         id="name"
         value={name}
         onChangeText={(text) => setName(text)}
        />
         <View style={styles.label}>
            <Text style={{ textDecorationLine: "underline"}}>Price</Text>
        </View>
        <Input 
         placeholder="Price"
         name="price"
         id="price"
         value={price}
         keyboardType={"numeric"}
         onChangeText={(text) => setPrice(text)}
        />
         <View style={styles.label}>
            <Text style={{ textDecorationLine: "underline"}}>Count in Stock</Text>
        </View>
        <Input 
         placeholder="Stock"
         name="stock"
         id="stock"
         value={countInStock}
         keyboardType={"numeric"}
         onChangeText={(text) => setCountInStock(text)}
        />
         <View style={styles.label}>
            <Text style={{ textDecorationLine: "underline"}}>Description</Text>
        </View>
        <Input 
         placeholder="Description"
         name="description"
         id="description"
         value={description}
         onChangeText={(text) => setDescription(text)}
        />

<View style={{ width: "80%", alignItems: "center" }}>
         <DropDownPicker
          open={open}
          value={value}
          items={item}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}

        />
        </View>


     
        {err ? <Error message={err} /> : null}
        <View style={styles.buttonContainer}>
            <Button
             
             title='Confirm'
             onPress={() => addProduct()}               
            >
              
            </Button>
        </View>
    </FormContainer>
    )
}



const styles = StyleSheet.create({
    label: {
        width: "80%",
        marginTop: 10
    },
    buttonContainer: {
        width: "80%",
        marginBottom: 80,
        marginTop: 20,
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderStyle: "solid",
        borderWidth: 8,
        padding: 0,
        justifyContent: "center",
        borderRadius: 100,
        borderColor: "#E0E0E0",
        elevation: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    imagePicker: {
        position: "absolute",
        right: 5,
        bottom: 5,
        backgroundColor: "grey",
        padding: 8,
        borderRadius: 100,
        elevation: 20
    }
})


export default ProductForm

      