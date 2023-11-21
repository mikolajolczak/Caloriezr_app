/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from "react";
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
  Image,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import Attributes from "./Attributes";
import Details from "./Details";
type productData = {
  toggleScanned: Function;
};
const ProductDetails = (props: productData) => {
  const addToFavourites = async (productName: string) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/add/favourite",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            name: productName,
          }),
        }
      );
      if (response.status) {
        console.log("ok");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const leftSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
  const heartSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>`;
  const filledHeartSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;
  const chevronsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;
  const [isDetails, toggleDetails] = useState(false);
  const [isFavourite, toggleFavourite] = useState(false);
  return (
    <View
      style={{
        paddingTop: 30,
        backgroundColor: "white",
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.toggleScanned(false);
            }}
          >
            <View style={{ width: 50, height: 50 }}>
              <SvgXml
                xml={leftSvg}
                width="100%"
                height="100%"
                stroke="grey"
                fill="grey"
                strokeWidth="2"
              ></SvgXml>
            </View>
          </TouchableOpacity>
          <Text>Dzik Energy Mango</Text>
          <TouchableOpacity
            onPress={() => {
              toggleFavourite(!isFavourite);
            }}
          >
            <View style={{ width: 50, height: 50 }}>
              <SvgXml
                xml={isFavourite ? filledHeartSvg : heartSvg}
                width="100%"
                height="100%"
                stroke="grey"
                fill="grey"
                strokeWidth="2"
              ></SvgXml>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ margin: 0, padding: 0 }}>
          <Image
            source={require("./png/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png")}
            style={{ borderRadius: 30, borderWidth: 3, borderColor: "red" }}
          />
          <View
            style={{
              backgroundColor: "white",
              width: 110,
              height: 110,
              top: -120,
              right: -240,
              margin: 0,
              padding: 0,
              borderRadius: 55,
            }}
          ></View>
          <Progress.Circle
            borderWidth={0}
            size={100}
            progress={0.9}
            animated={false}
            strokeCap="square"
            endAngle={0.3}
            style={{
              transform: [{ rotate: "180deg" }],
              top: -225,
              left: -47.5,
            }}
          />
          <Text style={{ top: -290, right: -285 }}>9.5</Text>
        </View>
        <View style={{ top: -220 }}>
          <Text>
            Gazowany napój energetyczny o smaku mango i dużej zawarotści kofieny
          </Text>
          <Text>Dodaj produkt do posiłku</Text>
          <Text>Składniki:</Text>
          <Text>
            woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,woda,
          </Text>
          <Text>Zdrowe</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Attributes text="Woda" color="green"></Attributes>
            <Attributes text="Woda" color="green"></Attributes>
            <Attributes text="Woda" color="green"></Attributes>
            <Attributes text="Woda" color="green"></Attributes>
            <Attributes text="Woda" color="green"></Attributes>
          </View>
          <Text>Bezpieczne</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Attributes text="Woda" color="yellow"></Attributes>
            <Attributes text="Woda" color="yellow"></Attributes>
            <Attributes text="Woda" color="yellow"></Attributes>
            <Attributes text="Woda" color="yellow"></Attributes>
            <Attributes text="Woda" color="yellow"></Attributes>
          </View>
          <Text>Podejrzane</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Attributes text="Woda" color="orange"></Attributes>
            <Attributes text="Woda" color="orange"></Attributes>
            <Attributes text="Woda" color="orange"></Attributes>
            <Attributes text="Woda" color="orange"></Attributes>
            <Attributes text="Woda" color="orange"></Attributes>
          </View>
          <Text>Szkodliwe</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Attributes text="Woda" color="red"></Attributes>
            <Attributes text="Woda" color="red"></Attributes>
            <Attributes text="Woda" color="red"></Attributes>
            <Attributes text="Woda" color="red"></Attributes>
            <Attributes text="Woda" color="red"></Attributes>
          </View>
          <TouchableOpacity
            onPress={() => {
              toggleDetails(!isDetails);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>Wartości odżywcze</Text>
              <View style={{ width: 10, height: 10 }}>
                <SvgXml
                  xml={chevronsvg}
                  width="100%"
                  height="100%"
                  stroke="black"
                  fill="black"
                ></SvgXml>
              </View>
            </View>
          </TouchableOpacity>
          {isDetails ? <Details details={[]} /> : <></>}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
