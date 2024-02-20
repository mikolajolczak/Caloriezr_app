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
import MealList from "./MealList";
import Water from "./Water";
import Statistics from "./Statistics";
import * as Progress from "react-native-progress";
import { SvgXml } from "react-native-svg";
import ModalAddTraining from "./ModalAddTraining";
type addCardData = {
  setModalVisible: Function;
  modalVisible: any;
};
const AddCardWalk = (props: addCardData) => {
  const plussvg = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>`;

  return (
    <Pressable
      onPress={() => {
        props.setModalVisible(true);
      }}
    >
      <View
        style={{
          width: 160,
          height: 250,
          backgroundColor: "#2b9454",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          borderRadius: 20,
          marginRight: 10,
        }}
      >
        <Text
          style={{ color: "white", fontFamily: "Roboto-Medium", fontSize: 20 }}
        >
          Dodaj
        </Text>
        <View style={{ height: 70, width: 50 }}>
          <SvgXml
            xml={plussvg}
            width="100%"
            height="100%"
            stroke="white"
            fill="white"
          ></SvgXml>
        </View>
        <Text
          style={{ color: "white", fontFamily: "Roboto-Medium", fontSize: 20 }}
        >
          Spacer
        </Text>
      </View>
    </Pressable>
  );
};

export default AddCardWalk;
