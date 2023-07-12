import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Categoryfilter = (props) => {
  return (
    <View style={{ height: 50, marginTop: 20 }}>
      <ScrollView
        bounces={true}
        horizontal={true}
        style={{
          backgroundColor: "#c1bebe",
          borderBottomColor: "red",
          borderEndWidth: 2,
        }}
      >
        <View style={{ margin: 0, padding: 0, borderRadius: 0 }}>
          <TouchableOpacity
            key={1}
            onPress={() => {
              props.changeCtg("all"), props.setActive(-1);
            }}
          >
            <View
              style={[
                styles.center,
                {
                  margin: 5,
                  width: 100,
                  backgroundColor: "red",
                  padding: 10,
                  borderRadius: 10,
                },
              ]}
            >
              <Text
                style={{
                  color: props.active == -1 ? styles.active : styles.inactive,
                }}
              >
                {" "}
                All
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {props.categories.map((item) => (
          <View style={{ margin: 0, padding: 0, borderRadius: 0 }}>
            <TouchableOpacity
              key={item._id.$oid}
              onPress={  () => {              
               props.changeCtg(item._id.$oid),
               props.setActive(props.categories.indexOf(item));

              }}
            >
              <View
                style={[
                  styles.center,
                  {
                    margin: 5,
                    width: 100,
                    backgroundColor: "red",
                    padding: 10,
                    borderRadius: 10,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      props.categories.indexOf(item) == -1
                        ? styles.active
                        : styles.inactive,
                  }}
                >
                  {" "}
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "green",
  },
  inactive: {
    backgroundColor: "transparent",
  },
});

export default Categoryfilter;
