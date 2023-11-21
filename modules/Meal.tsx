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
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Product from "./Product";
import { SvgXml } from "react-native-svg";
import Ingredients from "./Ingredients";
let output = [];
type MealData = {
  name: string;
  calories: number;
  carbs: number;
  fats: number;
  proteins: number;
  date: any;
};
const Meal = (props: MealData) => {
  const chevronsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;
  const circleplussvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color: #33ba61; stop-opacity: 1" /><stop offset="100%" style="stop-color: #6AD3C7; stop-opacity: 1" /></linearGradient></defs><path fill="url(#myGradient)" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>`;
  const elipsissvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><defs><linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color: #33ba61; stop-opacity: 1" /><stop offset="100%" style="stop-color: #6AD3C7; stop-opacity: 1" /></linearGradient></defs><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="url(#myGradient)" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>`;
  const [products, setProducts] = useState(false);
  const getTimeFromDate = (date) => {
    let timeWithSeconds = date
      .toISOString()
      .slice(
        date.toISOString().indexOf("T") + 1,
        date.toISOString().indexOf("Z")
      );
    return timeWithSeconds.slice(0, timeWithSeconds.indexOf(".") - 3);
  };
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Pressable onPress={() => setProducts(!products)}>
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

              <View
                style={{
                  width: 15,
                  height: 15,
                  paddingLeft: 5,
                  paddingTop: 5,
                }}
              >
                <SvgXml
                  xml={chevronsvg}
                  width="100%"
                  height="100%"
                  stroke="black"
                  fill="black"
                ></SvgXml>
              </View>
            </View>
          </Pressable>
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
                {props.calories}
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
                {props.carbs}
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
                {props.proteins}
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
                {props.fats}
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
            {getTimeFromDate(new Date(props.date))}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => {
                console.log("3 kropki");
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
                  xml={elipsissvg}
                  width="100%"
                  height="100%"
                  stroke="black"
                  fill="black"
                ></SvgXml>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("dodaj produkt do posilku");
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
      {products ? <Ingredients /> : null}
    </View>
  );
};

export default Meal;
