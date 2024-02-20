import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Button,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MealList from "./MealList";
import Water from "./Water";
import Statistics from "./Statistics";
import Modal from "react-native-modal";
import DatePicker from "react-native-date-picker";
import SearchBar from "./SearchBar";
import ProductDetails from "./ProductDetails";
type changeStepsData = {
  modalVisible: boolean;
  setModalVisible: Function;
  setFirstTime: Function;
  mealId: any;
};
const ModalAddProduct = (props: changeStepsData) => {
  const getProducts = async (password, email, name) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/product/name",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            name: name,
          }),
        }
      );
      if (response.status == 200) {
        const json = await response.json();
        setResults(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addProduct = async (password, email, product_id, meal_id, quantity) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/add/product/meal",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            product_id: product_id,
            meal_id: meal_id,
            quantity: quantity,
          }),
        }
      );
      if (response.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [products, setProducts] = useState(null);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <Modal
      isVisible={props.modalVisible}
      useNativeDriver={true}
      onBackButtonPress={() => {
        props.setModalVisible(false);
        setProducts([]);
        setResults([]);
      }}
    >
      <View style={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            alignSelf: "center",
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          Dodaj Produkt
        </Text>
        <TextInput
          placeholder="np. Mleko"
          onChangeText={(text) => {
            if (text.length > 3) {
              getProducts(123, "molczak@wp.pl", text);
            } else {
              setResults([]);
            }
            setSearch(text);
          }}
          value={search}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        {results.length > 0 ? (
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              alignSelf: "center",
              marginBottom: 10,
              fontSize: 16,
            }}
          >
            Wyniki
          </Text>
        ) : (
          <></>
        )}
        {results.map((result, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setProducts(result);
              setSearch("");
              setResults([]);
            }}
          >
            <Text>{result.Name}</Text>
          </TouchableOpacity>
        ))}
        {products != null ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 14,
                }}
              >
                Wybrany produkt
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 14,
                }}
              >
                Ilość
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{products.Name}</Text>
              <TextInput
                placeholder="0"
                onChangeText={(text) => {
                  products.quantity = text;
                }}
                value={products.quantity}
              />
            </View>
          </View>
        ) : (
          <></>
        )}
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
            addProduct(
              123,
              "molczak@wp.pl",
              products.Id,
              props.mealId,
              products.quantity
            );
          }}
          style={{ marginBottom: 10 }}
        >
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "green",
              alignSelf: "center",
              padding: 5,
            }}
          >
            Dodaj
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ModalAddProduct;
