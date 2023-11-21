/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
  Pressable,
} from "react-native";

import Head from "./Head";
import Feed from "./Feed";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Foot from "./Foot";
import SearchBar from "./SearchBar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Animated, TouchableOpacity } from "react-native";
import { SvgXml, Path, Svg } from "react-native-svg";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
type productInfo = {
  details: JSON;
  getUserInformation: Function;
  isFavourite: boolean;
  toggleScanned: Function;
};

const Product = (props: productInfo) => {
  const removeFromRecent = async (productName: string) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/remove/recent",
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
      if (response.status == 200) {
        props.getUserInformation();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromFavourites = async (productName: string) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/remove/favourite",
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
      if (response.status == 200) {
        props.getUserInformation();
      }
    } catch (error) {
      console.error(error);
    }
  };
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
        props.getUserInformation();
        console.log("ok");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const dotssvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>`;
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          props.toggleScanned(true);
        }}
      >
        <View style={styles.scoreContainer}>
          <Text
            style={[
              parseFloat(props.details.score) > 7
                ? styles.greenScore
                : parseFloat(props.details.score) < 3.5
                ? styles.redScore
                : styles.yellowScore,
            ]}
          >
            {props.details.score}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.toggleScanned(true);
        }}
        style={styles.centerContainer}
      >
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.nameName}>{props.details.name}</Text>
          </View>
          <View>
            <Text style={styles.nameType}>{props.details.description}</Text>
          </View>
        </View>
        <View style={styles.propertiesContainer}>
          <View>
            <Text style={styles.nameName}>
              {props.details.sizeofproduct + props.details.unit}
            </Text>
          </View>
          <View>
            <Text style={styles.nameType}>
              {props.details.caloriesperhundred}kcal/100{props.details.unit}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Menu>
        <MenuTrigger>
          <View
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <SvgXml
              xml={dotssvg}
              width="100%"
              height="100%"
              fill="#d9d9d9"
              stroke="#d9d9d9"
              style={{ margin: 0, padding: 0 }}
            />
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{ marginTop: 20, marginLeft: -15 }}>
          {props.isFavourite ? (
            <></>
          ) : (
            <MenuOption
              text="Dodaj do Ulubionych"
              onSelect={() => {
                addToFavourites(props.details.name);
              }}
            />
          )}
          {props.isFavourite ? (
            <MenuOption
              text="Usuń"
              onSelect={() => {
                removeFromFavourites(props.details.name);
              }}
            />
          ) : (
            <MenuOption
              text="Usuń"
              onSelect={() => {
                removeFromRecent(props.details.name);
              }}
            />
          )}
        </MenuOptions>
      </Menu>
    </View>
  );
};
const styles = StyleSheet.create({
  scoreContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 0.5,
    borderColor: "lightgrey",
    paddingRight: 3,
    width: 35,
  },
  redScore: { color: "#CE2E2E", fontSize: 20, fontFamily: "Roboto-Bold" },
  yellowScore: { color: "#F2B53D", fontSize: 20, fontFamily: "Roboto-Bold" },
  greenScore: { color: "#2B9454", fontSize: 20, fontFamily: "Roboto-Bold" },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  centerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexGrow: 1,
    paddingLeft: 5,
    borderRightWidth: 0.5,
    borderColor: "lightgrey",
    paddingRight: 5,
  },
  nameContainer: { justifyContent: "center", alignItems: "flex-start" },
  name: {
    color: "black",
  },
  nameType: { color: "#9a9a9a", fontFamily: "Roboto-Light", fontSize: 11 },
  nameName: { color: "#242424", fontFamily: "Roboto-Medium", fontSize: 14 },
  propertiesContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});
export default Product;
