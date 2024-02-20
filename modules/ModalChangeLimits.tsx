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
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MealList from "./MealList";
import Water from "./Water";
import Statistics from "./Statistics";
import Modal from "react-native-modal";
type changeStepsData = {
  modalVisible: boolean;
  setModalVisible: Function;
  setFirstTime: Function;
};

const ModalChangeLimits = (props: changeStepsData) => {
  const updateMaxLimits = async (
    password,
    email,
    carbon_limit,
    calories_limit: number,
    proteins_limit,
    fats_limit
  ) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/change/meal/limit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            carbon_limit: carbon_limit,
            calories_limit: calories_limit,
            proteins_limit: proteins_limit,
            fats_limit: fats_limit,
          }),
        }
      );
      if (response.status == 200) {
        props.setFirstTime(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [calories, changeCalories] = React.useState("");
  const [proteins, changeProteins] = React.useState("");
  const [carbons, changeCarbons] = React.useState("");
  const [fats, changeFats] = React.useState("");
  return (
    <Modal
      isVisible={props.modalVisible}
      useNativeDriver={true}
      onBackButtonPress={() => {
        props.setModalVisible(false);
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            alignSelf: "center",
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          Zmień dzienny limit wartości odżywczych
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Kalorie:
        </Text>
        <TextInput
          placeholder="Np. 25000"
          onChangeText={changeCalories}
          value={calories}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Białko:
        </Text>
        <TextInput
          placeholder="Np. 25000"
          onChangeText={changeProteins}
          value={proteins}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Węglowodany:
        </Text>
        <TextInput
          placeholder="Np. 25000"
          onChangeText={changeCarbons}
          value={carbons}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Tłuszcze:
        </Text>
        <TextInput
          placeholder="Np. 25000"
          onChangeText={changeFats}
          value={fats}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
            updateMaxLimits(
              123,
              "molczak@wp.pl",
              carbons,
              parseInt(calories),
              proteins,
              fats
            );
            changeCarbons("");
            changeFats("");
            changeProteins("");
            changeCalories("");
          }}
          style={{ marginBottom: 10 }}
        >
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "green",
              alignSelf: "center",
              padding: 5,
            }}
          >
            Zmień
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ModalChangeLimits;
