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
import Meal from "./Meal";
import Water from "./Water";
import { MenuProvider } from "react-native-popup-menu";
const Settings = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        backgroundColor: darkMode ? "black" : "white",
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 24,
            marginTop: 10,
            color: darkMode ? "white" : "black",
          }}
        >
          Tryb Nocny
        </Text>
        <TouchableOpacity
          onPress={() => {
            setDarkMode(!darkMode);
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              color: darkMode ? "white" : "black",
              borderWidth: 1,
              borderColor: darkMode ? "white" : "black",
              borderRadius: 10,
            }}
          >
            {darkMode ? "Włączony" : "Wyłączony"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
