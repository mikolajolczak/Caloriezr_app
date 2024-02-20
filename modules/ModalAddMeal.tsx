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
};
const ModalAddMeal = (props: changeStepsData) => {
  const addMeal = async (
    password,
    email,
    products,
    date,
    meal_name,
    description,
    prep_time
  ) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/add/meal",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            password: password,
            email: email,
            products: products,
            meal_name: meal_name,
            date: date,
            description: description,
            prep_time: prep_time,
          }),
        }
      );
      if (response.status == 200) {
        props.setFirstTime(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
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
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [description, setDescription] = useState("");
  const [preparationTime, setPrepatationTime] = useState("");
  return (
    <Modal
      isVisible={props.modalVisible}
      useNativeDriver={true}
      onBackButtonPress={() => {
        props.setModalVisible(false);
        setName("");
        setDate("");
        setProducts([]);
        setResults([]);
        setDescription("");
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
          Dodaj posiłek
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Nazwa posiłku:
        </Text>
        <TextInput
          placeholder="Śniadanie"
          onChangeText={setName}
          value={name}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Czas przygotowania:
        </Text>
        <TextInput
          placeholder="30"
          onChangeText={setPrepatationTime}
          value={preparationTime}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Data planowanego spożycia:
        </Text>
        <TextInput
          placeholder="01/01/2024 14:09"
          onChangeText={setDate}
          value={date}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Nazwa dania
        </Text>
        <TextInput
          placeholder="Sałatka z pieczonym łososiem"
          onChangeText={setDescription}
          value={description}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            alignSelf: "center",
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          Dodaj Produkty
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
              setProducts((oldProducts) => [...oldProducts, result]);
              setSearch("");
              setResults([]);
            }}
          >
            <Text>{result.Name}</Text>
          </TouchableOpacity>
        ))}
        {products.length > 0 ? (
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
              Wybrane produkty
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
        ) : (
          <></>
        )}
        {products.map((product, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            >
              {product.Name}
            </Text>
            <TextInput
              placeholder="0"
              onChangeText={(text) => {
                product.quantity = text;
              }}
              value={product.quantity}
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            />
          </View>
        ))}
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
            let productsAndQuantiy = [];
            products.forEach((product) => {
              productsAndQuantiy.push([product.Id, product.quantity]);
            });
            addMeal(
              123,
              "molczak@wp.pl",
              productsAndQuantiy,
              new Date(),
              name,
              description,
              parseInt(preparationTime)
            );
            setName("");
            setDate("");
            setPrepatationTime("");
            setProducts([]);
            setResults([]);
            setDescription("");
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

export default ModalAddMeal;
