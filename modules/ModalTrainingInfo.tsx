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
import { SvgXml } from "react-native-svg";
type changeStepsData = {
  modalVisible: boolean;
  setModalVisible: Function;
  training: any;
};
const ModalTrainingInfo = (props: changeStepsData) => {
  const [products, setProducts] = useState(null);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const xmarksvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
  const deleteTraining = async (password, email, training_id) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/del/training",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            training_id: training_id,
          }),
        }
      );
      if (response.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteExercise = async (password, email, training_id, exercise_id) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/del/exercise/training",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            training_id: training_id,
            exercise_id: exercise_id,
          }),
        }
      );
      if (response.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal
      isVisible={props.modalVisible}
      useNativeDriver={true}
      onBackButtonPress={() => {
        props.setModalVisible(false);
        setProducts([]);
        setResults([]);
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
          {props.training.training_name == undefined
            ? props.training.Name
            : props.training.training_name}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 14,
            }}
          >
            Ćwiczenia
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginRight: 10,
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            >
              Powtórzenia
            </Text>
            <Text
              style={{
                marginRight: 10,
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            >
              Serie
            </Text>
            <Text
              style={{
                marginRight: 10,
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            >
              Spalone kalorie
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            >
              usun
            </Text>
          </View>
        </View>
        {props.training.exercises != undefined ? (
          props.training.exercises.map((exercise, index) => (
            <View style={{ marginTop: 5 }}>
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text numberOfLines={2} style={{ width: 150 }}>
                  {exercise.Name}
                </Text>
                <Text>{exercise.Repetitions}</Text>
                <Text>{exercise.Series}</Text>
                <Text>
                  {exercise.Calories_Loss *
                    exercise.Repetitions *
                    exercise.Series}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    deleteExercise(
                      123,
                      "molczak@wp.pl",
                      props.training.training_id,
                      exercise.Id
                    );
                  }}
                >
                  <View
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  >
                    <SvgXml
                      xml={xmarksvg}
                      width="100%"
                      height="100%"
                      stroke="red"
                      fill="red"
                    ></SvgXml>
                  </View>
                </TouchableOpacity>
              </View>
              <Text>Trenowane mięśnie:</Text>
              {exercise.Body_Parts != undefined ? (
                exercise.Body_Parts.map((body_part, index) => (
                  <Text>{body_part.Name}</Text>
                ))
              ) : (
                <></>
              )}
            </View>
          ))
        ) : (
          <></>
        )}
        <TouchableOpacity
          onPress={() => {
            deleteTraining(123, "molczak@wp.pl", props.training.training_id);
          }}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text>Usuń trening</Text>
            <View
              style={{
                width: 30,
                height: 30,
                paddingLeft: 5,
                paddingTop: 5,
              }}
            >
              <SvgXml
                xml={xmarksvg}
                width="100%"
                height="100%"
                stroke="red"
                fill="red"
              ></SvgXml>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalTrainingInfo;
