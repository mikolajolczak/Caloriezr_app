import React from "react";
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
  ScrollViewComponent,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
type IngredientData = {
  product: JSON;
  mealId: number;
};
const Ingredient = (props: IngredientData) => {
  const removeProductFromMeal = async (
    password,
    email,
    product_id,
    meal_id
  ) => {
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
        "https://shaped-glazing-402314.lm.r.appspot.com/del/product/meal",
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
          }),
        }
      );
      if (response.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  const xmarksvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#242424",
            fontFamily: "Roboto-Regular",
            fontSize: 12,
          }}
        >
          {props.product.Name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            removeProductFromMeal(
              123,
              "molczak@wp.pl",
              props.product.Product_Id,
              props.mealId
            );
          }}
        >
          <View style={{ width: 15, height: 15 }}>
            <SvgXml
              xml={xmarksvg}
              width="100%"
              height="100%"
              stroke="#242424"
              fill="#242424"
            ></SvgXml>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{ color: "#9a9a9a", fontFamily: "Roboto-Light", fontSize: 10 }}
      >
        {props.product.Quantity} x Opakowanie (
        {props.product.Size + props.product.Unit})
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            color: "#9a9a9a",
            fontFamily: "Roboto-Light",
            fontSize: 10,
            borderRightWidth: 0.5,
            borderColor: "#9a9a9a",
            width: 40,
            marginRight: 5,
          }}
        >
          {props.product.Calories}
        </Text>
        <Text
          style={{
            color: "#9a9a9a",
            fontFamily: "Roboto-Light",
            fontSize: 10,
            borderRightWidth: 0.5,
            borderColor: "#9a9a9a",
            width: 40,
            marginRight: 5,
          }}
        >
          {props.product.Carbons}
        </Text>
        <Text
          style={{
            color: "#9a9a9a",
            fontFamily: "Roboto-Light",
            fontSize: 10,
            borderRightWidth: 0.5,
            borderColor: "#9a9a9a",
            width: 40,
            marginRight: 5,
          }}
        >
          {props.product.Proteins}
        </Text>
        <Text
          style={{ color: "#9a9a9a", fontFamily: "Roboto-Light", fontSize: 10 }}
        >
          {props.product.Fats}
        </Text>
      </View>
    </View>
  );
};

export default Ingredient;
