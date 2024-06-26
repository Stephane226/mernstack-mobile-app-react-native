import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import ProductList from "./productlist";
import SearchedProduct from "./searchProducts";
import Banner from "../../shared/banner";
import Categoryfilter from './CategoryFilter'
import axios from 'axios'
import baseURL from '../../assets/common/baseUrl'

const data = require("../../assets/data/products.json");
const productsCategories = require("../../assets/data/categories.json");


import { TextInput, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

export default function productContainer(props) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const [focus, setFocus] = useState(false);
  const [categories , setCategories] = useState([])
  const [active, setActive] = useState()
  const [initialState, setInitialState] = useState([])
  const [productsCtg, setProductsCtg] = useState([])

  useEffect(() => {
   
    setFocus(false)
   // setCategories(productsCategories);
    setActive(-1)
  

    //axios fetchs products
    axios.get(`${baseURL}products`) 
    .then((response) =>{
      setProducts(response.data);
      setProductsFiltered(response.data);
      setInitialState(response.data)
      setProductsCtg(response.data)
    }).catch((err) =>{console.log(err)})

    //axios fetchs categories
    axios.get(`${baseURL}categories`) 
    .then((response) =>{
      setCategories(response.data);
    }).catch((err) =>{console.log(err)})


    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus()
      setCategories([]);
      setActive()
      setInitialState()
      setProductsCtg([])

    };
    
  }, []);

  const searchProduct = (cnt) => {
    setProductsFiltered(products.filter((i) => i.name.toLowerCase().includes(cnt.toLowerCase())));
    setInputValue(cnt)
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const changeCtg = (ctg) =>{


    ctg === 'all' ?    
     [setCategories(categories),setActive(true) ]
    
     : [
      setProductsCtg(
        products.filter((i) => i.category === ctg),
        setActive(true)
      ),
      
    ];
  

  
   
  // console.log(products.filter( (i) => i.category.$oid == '5f15d5b7cb4a6642bddc0fe8'))

  }
  const SearchBar = () => {
    return (
      <View style={styles.container2}>
        <View style={styles.searchBar__unclicked}>
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            onFocus={openList}
            onChangeText = {(cnt) => searchProduct(cnt)}
            value= {inputValue}
          />

          {focus == true ? (
            <Text onPress={onBlur} style={{ marginLeft: -10 }}>
              X
            </Text>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <View>
    
      {focus == true ? (
        <View>
         <SearchBar />
         <Banner/>
         <Categoryfilter
          categories = {categories}
          changeCtg ={changeCtg}
          productsCtg = {productsCtg}
          active = {active}
          setActive ={ setActive}
          productsCategories = {productsCategories}

         />
        <View style={styles.listContainer}>
          <Text>Products container </Text>

          <View style={{ marginTop: 10 }}>
            <SearchedProduct productsFiltered={productsFiltered} />
          </View>
        </View>
        </View>
      ) : (
        <View>
        <SearchBar />
        <Banner/>
        <Categoryfilter
          categories = {categories}
          changeCtg ={changeCtg}
          productsCtg = {productsCtg}
          active = {active}
          setActive ={ setActive}
          

         />
            <ScrollView
           horizontal='true'
           >
        <View style={styles.listContainer}>

         { 
            productsCtg.length > 0 ? (
             productsCtg.map((item, index) => {
              return(
                <ProductList 
                key={index}
                item ={item}
                navigation = {props.navigation}
               />

              )
             })
            ):(
            <View>
              <Text>NO DATA</Text>
            </View>
              
            )
            }
        </View>
        </ScrollView>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container2: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },

  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
