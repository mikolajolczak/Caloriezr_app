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
} from "react-native";
import { SvgXml } from "react-native-svg";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
type AttributesData = {
  color: string;
  text: string;
};
const Attributes = (props: AttributesData) => {
  const [textData, setTextData] = useState(null);
  return (
    <View style={{ marginRight: 10, marginBottom: 10 }}>
      <Text
        style={
          textData == null
            ? { backgroundColor: props.color }
            : {
                width: textData.width + 10,
                height: textData.height,
                backgroundColor: props.color,
                borderRadius: 20,
                paddingLeft: 5,
              }
        }
        onTextLayout={(e) => {
          setTextData({
            width: e.nativeEvent.lines[0].width,
            height: e.nativeEvent.lines[0].height,
          });
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};
export default Attributes;
