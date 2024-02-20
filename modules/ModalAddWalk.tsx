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
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MealList from "./MealList";
import Water from "./Water";
import Statistics from "./Statistics";
import Modal from "react-native-modal";
import DatePicker from "react-native-date-picker";
import SearchBar from "./SearchBar";
import ProductDetails from "./ProductDetails";
type changeStepsData = {
  modalVisible: boolean;
  setModalVisible: Function;
  setFirstTime: Function;
};
const ModalAddWalk = (props: changeStepsData) => {
  const addWalk = async (
    password,
    email,
    steps,
    start_date,
    end_date,
    length
  ) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/add/walk",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            password: password,
            email: email,
            date_start: start_date,
            steps: steps,
            date_end: end_date,
            length: length,
          }),
        }
      );
      if (response.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [exercises, setExercises] = useState([]);
  const [steps, setSteps] = useState("");
  const [length, setLength] = useState("");
  return (
    <Modal
      isVisible={props.modalVisible}
      useNativeDriver={true}
      onBackButtonPress={() => {
        props.setModalVisible(false);
        setName("");
        setStartDate("");
        setEndDate("");
        setExercises([]);
        setSteps("");
        setLength("");
      }}
    >
      <View style={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            alignSelf: "center",
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          Dodaj spacer
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Data rozpoczęcia spaceru
        </Text>
        <TextInput
          placeholder="01/01/2024 14:09"
          onChangeText={setStartDate}
          value={startDate}
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
          Data zakończenia spaceru
        </Text>
        <TextInput
          placeholder="01/01/2024 14:09"
          onChangeText={setEndDate}
          value={endDate}
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
          Liczba kroków
        </Text>
        <TextInput
          placeholder="300"
          onChangeText={setSteps}
          value={steps}
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
          Przebyty dystans (m)
        </Text>
        <TextInput
          placeholder="40"
          onChangeText={setLength}
          value={length}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
            addWalk(
              123,
              "molczak@wp.pl",
              steps,
              new Date(),
              new Date(),
              length
            );
            setName("");
            setStartDate("");
            setEndDate("");
            setExercises([]);
            setSteps("");
            setLength("");
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
            Dodaj
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ModalAddWalk;
