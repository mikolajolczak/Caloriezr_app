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
} from "react-native";

import Head from "./Head";
import Feed from "./Feed";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Foot from "./Foot";
import SearchBar from "./SearchBar";
import FoodList from "./FoodList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import CameraView from "./CameraView";
type scannerData = {
  toggleCamera: Function;
  toggleScanned: Function;
  setProduct: Function;
  setScanned: Function;
};
const Scaner = (props: scannerData) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [recent, setRecent] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [scanned, setScanned] = useState(false);
  const [firsttime, setFirstTime] = useState(true);
  const getUserRecent = async (password, email) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/products/recent",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
          }),
        }
      );
      const json = await response.json();
      setRecent(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getUserFavourite = async (password, email) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/products/favourite",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
          }),
        }
      );
      const json = await response.json();
      setFavourite(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      Promise.all([
        getUserRecent(123, "molczak@wp.pl"),
        getUserFavourite(123, "molczak@wp.pl"),
      ]);
    };
    if (firsttime) {
      fetchData();
      setFirstTime(false);
    }
  });
  return (
    <View
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 50,
        backgroundColor: "white",
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <SearchBar
        toggleCamera={props.toggleCamera}
        setProduct={props.setProduct}
        setScanned={props.setScanned}
      />
      <FoodList
        recent={recent}
        favourite={favourite}
        getFavouriteProducts={getUserFavourite}
        getRecentProducts={getUserRecent}
        toggleScanned={props.toggleScanned}
        setProduct={props.setProduct}
      />
    </View>
  );
};

export default Scaner;
