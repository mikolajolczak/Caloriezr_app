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
  Animated,
  TouchableOpacity,
  Modal,
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Product from "./Product";
import { SvgXml } from "react-native-svg";
import Ingredients from "./Ingredients";
import ModalAddProduct from "./ModalAddProduct";
let output = [];
type MealData = {
  name: string;
  calories: number;
  carbs: number;
  fats: number;
  proteins: number;
  date: any;
  products: any[];
  mealId: number;
};
const Meal = (props: MealData) => {
  const chevronsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;
  const circleplussvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color: #33ba61; stop-opacity: 1" /><stop offset="100%" style="stop-color: #6AD3C7; stop-opacity: 1" /></linearGradient></defs><path fill="url(#myGradient)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>`;
  const xmarksvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
  const [products, setProducts] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const spinValue = useState(new Animated.Value(0))[0];
  const spinDeg = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const removeMeal = async (password, email, id) => {
    let startOfTheWeek: Date;
    let currentDay = new Date();
    if (currentDay.getDay() == 1) {
      startOfTheWeek = currentDay;
    } else {
      startOfTheWeek = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate() -
          (currentDay.getDay() == 0
            ? currentDay.getDay() + 6
            : currentDay.getDay() - 1)
      );
    }
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/del/meal",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            id: id,
          }),
        }
      );
      if (response.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <ModalAddProduct
        setFirstTime={setAddModalVisible}
        setModalVisible={setAddModalVisible}
        modalVisible={addModalVisible}
        mealId={props.mealId}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (products) {
                Animated.spring(spinValue, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start();
              } else {
                Animated.spring(spinValue, {
                  toValue: 1,
                  useNativeDriver: true,
                }).start();
              }
              setProducts(!products);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#242424",
                  fontFamily: "Roboto-Regular",
                  fontSize: 16,
                }}
              >
                {props.name}
              </Text>
              <Animated.View
                style={{
                  width: 10,
                  height: 10,
                  marginTop: 5,
                  marginLeft: 5,
                  transform: [
                    {
                      rotate: spinDeg,
                    },
                  ],
                }}
              >
                <SvgXml
                  xml={chevronsvg}
                  width="100%"
                  height="100%"
                  stroke="black"
                  fill="black"
                ></SvgXml>
              </Animated.View>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRightWidth: 0.5,
                borderColor: "#9a9a9a",
                width: 40,
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  color: "#242424",
                  fontFamily: "Roboto-Regular",
                  fontSize: 12,
                }}
              >
                Kcal
              </Text>
              <Text
                style={{
                  color: "#9a9a9a",
                  fontFamily: "Roboto-Light",
                  fontSize: 10,
                }}
              >
                {Math.round(props.calories)}
              </Text>
            </View>
            <View
              style={{
                borderRightWidth: 0.5,
                borderColor: "#9a9a9a",
                width: 40,
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  color: "#242424",
                  fontFamily: "Roboto-Regular",
                  fontSize: 12,
                }}
              >
                Węgl.
              </Text>
              <Text
                style={{
                  color: "#9a9a9a",
                  fontFamily: "Roboto-Light",
                  fontSize: 10,
                }}
              >
                {Math.round(props.carbs)}
              </Text>
            </View>
            <View
              style={{
                borderRightWidth: 0.5,
                borderColor: "#9a9a9a",
                width: 40,
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  color: "#242424",
                  fontFamily: "Roboto-Regular",
                  fontSize: 12,
                }}
              >
                Białko
              </Text>
              <Text
                style={{
                  color: "#9a9a9a",
                  fontFamily: "Roboto-Light",
                  fontSize: 10,
                }}
              >
                {Math.round(props.proteins)}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#242424",
                  fontFamily: "Roboto-Regular",
                  fontSize: 12,
                }}
              >
                Tłusz.
              </Text>
              <Text
                style={{
                  color: "#9a9a9a",
                  fontFamily: "Roboto-Light",
                  fontSize: 10,
                }}
              >
                {Math.round(props.fats)}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#242424",
              alignSelf: "flex-end",
              fontFamily: "Roboto-Light",
              fontSize: 16,
            }}
          >
            {new Date(props.date).toLocaleTimeString().slice(0, -3)}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => {
                removeMeal(123, "molczak@wp.pl", props.mealId);
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  paddingLeft: 5,
                  paddingTop: 5,
                }}
              >
                <SvgXml
                  xml={xmarksvg}
                  width="100%"
                  height="100%"
                  stroke="red"
                  fill="red"
                ></SvgXml>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                setAddModalVisible(true);
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  paddingTop: 5,
                }}
              >
                <SvgXml
                  xml={circleplussvg}
                  width="100%"
                  height="100%"
                  stroke="black"
                  fill="black"
                ></SvgXml>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      {products ? (
        <Ingredients products={props.products} mealId={props.mealId} />
      ) : null}
    </View>
  );
};

export default Meal;
