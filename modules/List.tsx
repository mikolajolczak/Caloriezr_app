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
import Product from "./Product";
import { MenuProvider } from "react-native-popup-menu";

type listElements = {
  elements: any[];
  getRecentProducts: Function;
  getFavouriteProducts: Function;
  isFavourite: boolean;
  toggleScanned: Function;
  setProduct: Function;
};

const List = (props: listElements) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <ScrollView style={{ flexGrow: 1, marginTop: 2.5 }}>
      {props.elements.map((element, index) => (
        <Product
          details={element}
          getRecentProducts={props.getRecentProducts}
          getFavouriteProducts={props.getFavouriteProducts}
          isFavourite={props.isFavourite}
          toggleScanned={props.toggleScanned}
          setProduct={props.setProduct}
          key={index}
        />
      ))}
    </ScrollView>
  );
};

export default List;
