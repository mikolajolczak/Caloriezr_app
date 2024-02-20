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
  calories: any;
  proteins: any;
  carbs: any;
  fats: any;
};
const Details = (props: productData) => {
  const [multiplier, setMultiplier] = useState(1);
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          Kalorie
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          {props.calories}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          Białko
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          {props.proteins}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          Węglowodany
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          {props.carbs}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          Tłuszcze
        </Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          {props.fats}
        </Text>
      </View>
      {props.details.map((macro, index) => (
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          key={index}
        >
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
            {macro.Name + " " + (macro.Unit != null ? `(${macro.Unit})` : ``)}
          </Text>
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
            {macro.Value * multiplier}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Details;
