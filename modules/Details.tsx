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
type productData = {
  details: Array<any>;
};
const Details = (props: productData) => {
  const Tab = createMaterialTopTabNavigator();
  const [multiplier, setMultiplier] = useState(1);
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => {
            setMultiplier(1);
          }}
        >
          <Text
            style={{
              color: multiplier == 1 ? "#2b9454" : "#9a9a9a",
              fontFamily: "Roboto-Regular",
              fontSize: 14,
            }}
          >
            100g
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMultiplier(2);
          }}
        >
          <Text
            style={{
              color: multiplier == 2 ? "#2b9454" : "#9a9a9a",
              fontFamily: "Roboto-Regular",
              fontSize: 14,
            }}
          >
            1x szklanka
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMultiplier(0.5);
          }}
        >
          <Text
            style={{
              color: multiplier == 0.5 ? "#2b9454" : "#9a9a9a",
              fontFamily: "Roboto-Regular",
              fontSize: 14,
            }}
          >
            0.5x opakowanie
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMultiplier(0.25);
          }}
        >
          <Text
            style={{
              color: multiplier == 0.25 ? "#2b9454" : "#9a9a9a",
              fontFamily: "Roboto-Regular",
              fontSize: 14,
            }}
          >
            1x opakowanie
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          Wartość energetyczna (kcal)
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>3</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          Wartość energetyczna (kcal)
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>3</Text>
      </View>
    </View>
  );
};

export default Details;
