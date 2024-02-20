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
const ModalAddTraining = (props: changeStepsData) => {
  const addTraining = async (
    password,
    email,
    name,
    start_date,
    end_date,
    exercises,
    description
  ) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/add/training",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            password: password,
            email: email,
            start_date: start_date,
            name: name,
            end_date: end_date,
            exercises: exercises,
            description: description,
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
  const getExercises = async (password, email, name) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/exercise/name",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            name: name,
          }),
        }
      );
      if (response.status == 200) {
        const json = await response.json();
        setResults(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [exercises, setExercises] = useState([]);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [description, setDescription] = useState("");
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
        setResults([]);
        setDescription("");
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
          Dodaj Trening
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          }}
        >
          Nazwa treningu:
        </Text>
        <TextInput
          placeholder="np. Poranny Trening"
          onChangeText={setName}
          value={name}
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
          Planowana data rozpoczęcia:
        </Text>
        <TextInput
          placeholder="np. 01/01/2024 14:09"
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
          Planowana data zakończenia
        </Text>
        <TextInput
          placeholder="np. 01/01/2024 16:09"
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
          Opis treningu
        </Text>
        <TextInput
          placeholder="np. Trening pleców"
          onChangeText={setDescription}
          value={description}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            alignSelf: "center",
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          Dodaj cwiczenia
        </Text>
        <TextInput
          placeholder="np. Przysiady"
          onChangeText={(text) => {
            if (text.length > 3) {
              getExercises(123, "molczak@wp.pl", text);
            } else {
              setResults([]);
            }
            setSearch(text);
          }}
          value={search}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        {results.length > 0 ? (
          <Text
            style={{
              fontFamily: "Roboto-Regular",
              alignSelf: "center",
              marginBottom: 10,
              fontSize: 16,
            }}
          >
            Wyniki
          </Text>
        ) : (
          <></>
        )}
        {results.map((result, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setExercises((oldProducts) => [...oldProducts, result]);
              setSearch("");
              setResults([]);
            }}
          >
            <Text>{result.Name}</Text>
          </TouchableOpacity>
        ))}
        {exercises.length > 0 ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Ćwiczenia</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginRight: 10 }}>Powtórzenia</Text>
              <Text>Serie</Text>
            </View>
          </View>
        ) : (
          <></>
        )}
        {exercises.map((exercise, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>{exercise.Name}</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="0"
                onChangeText={(text) => {
                  exercise.repetitions = text;
                }}
                value={exercise.repetitions}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="0"
                onChangeText={(text) => {
                  exercise.series = text;
                }}
                value={exercise.series}
              />
            </View>
          </View>
        ))}
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
            let exercisesAndDetails = [];
            exercises.forEach((exercise) => {
              exercisesAndDetails.push([
                exercise.Id,
                parseInt(exercise.repetitions),
                parseInt(exercise.series),
              ]);
            });
            addTraining(
              123,
              "molczak@wp.pl",
              name,
              new Date(),
              new Date(),
              exercisesAndDetails,
              description
            );
            setName("");
            setStartDate("");
            setEndDate("");
            setExercises([]);
            setResults([]);
            setDescription("");
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

export default ModalAddTraining;
