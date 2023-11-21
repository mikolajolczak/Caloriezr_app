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
};
const Scaner = (props: scannerData) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [username, setUsername] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [scanned, setScanned] = useState(false);
  const getUserInformation = async () => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/scaner",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
          }),
        }
      );
      const json = await response.json();
      setUsername(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserInformation();
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
      <SearchBar toggleCamera={props.toggleCamera} />
      <FoodList
        recent={username == null ? [] : username.recent}
        favourite={username == null ? [] : username.favourites}
        getUserInformation={getUserInformation}
        toggleScanned={props.toggleScanned}
      />
    </View>
  );
};

export default Scaner;
