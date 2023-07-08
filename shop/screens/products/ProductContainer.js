import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import ProductList from "./productlist";
import SearchedProduct from "./searchProducts";

const data = require("../../assets/data/products.json");

import { TextInput, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

export default function productContainer(props) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setproductsFiltered] = useState([]);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setProducts(data);
    setproductsFiltered(data);

    return () => {
      setProducts([]);
    };
  }, []);

  const searchProduct = (text) => {
    setproductsFiltered(products.filter((i) => i.name.includes(text)));
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

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
            onChange={(text) => searchProduct(text)}
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
      <SearchBar />
      {focus == true ? (
        <View>
          <SearchedProduct productsFiltered={productsFiltered} />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <Text>Products container </Text>

          <View style={{ marginTop: 10 }}>
            <FlatList
              numColumns={2}
              data={products}
              renderItem={({ item }) => (
                <ProductList key={item.id} item={item} />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
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
