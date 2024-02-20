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
type loginData = {
  setLogged: Function;
  setPassword: Function;
  setEmail: Function;
};
const Login = (props: loginData) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const register = async (
    password,
    email,
    water_limit,
    step_limit,
    calories_limit,
    proteins_limit,
    fats_limit,
    carbs_limit,
    name
  ) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/add/user",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            water_limit: parseInt(water_limit),
            step_limit: parseInt(step_limit),
            calories_limit: parseInt(calories_limit),
            proteins_limit: proteins_limit,
            fats_limit: fats_limit,
            carbs_limit: carbs_limit,
            name: name,
          }),
        }
      );
      if (response.status == 200) {
        props.setEmail(email);
        props.setPassword(password);
        props.setLogged(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const login = async (password, email) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/user?" +
          new URLSearchParams({
            password: password,
            email: email,
          }),
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 200) {
        props.setEmail(email);
        props.setPassword(password);
        props.setLogged(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [type, setType] = useState(true);
  const [caloriesLimit, setCaloriesLimit] = useState("");
  const [name, setName] = useState("");
  const [proteinsLimit, setProteinsLimit] = useState("");
  const [carbsLimit, setCarbsLimit] = useState("");
  const [fatsLimit, setFatsLimit] = useState("");
  const [waterLimit, setWaterLimit] = useState("");
  const [stepLimit, setStepLimit] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        backgroundColor: "white",
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto-Regular",
          fontSize: 24,
          textAlign: "center",
          color: "green",
        }}
      >
        Caloriezr
      </Text>
      {type ? (
        <View style={{ marginTop: 100 }}>
          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setPassword("");
              setEmail("");
              setType(false);
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 16,
              }}
            >
              Nie masz konta? Zarejestruj się
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              login(password, email);
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 24,
                marginTop: 50,
                borderWidth: 1,
                borderRadius: 10,
                textAlign: "center",
                color: "green",
              }}
            >
              Zaloguj się!
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Imię"
            value={name}
            onChangeText={setName}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Limit dzienny wody"
            value={waterLimit}
            onChangeText={setWaterLimit}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Limit dzienny kroków"
            value={stepLimit}
            onChangeText={setStepLimit}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Limit dzienny kalorii"
            value={caloriesLimit}
            onChangeText={setCaloriesLimit}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Limit dzienny węglowodanów"
            value={carbsLimit}
            onChangeText={setCarbsLimit}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Limit dzienny białka"
            value={proteinsLimit}
            onChangeText={setProteinsLimit}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Limit dzienny tłuszczy"
            value={fatsLimit}
            onChangeText={setFatsLimit}
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 24,
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setPassword("");
              setEmail("");
              setCaloriesLimit("");
              setCarbsLimit("");
              setProteinsLimit("");
              setFatsLimit("");
              setWaterLimit("");
              setStepLimit("");
              setType(true);
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 16,
              }}
            >
              Już masz konto? Zaloguj się!
            </Text>
            <TouchableOpacity
              onPress={() => {
                register(
                  password,
                  email,
                  waterLimit,
                  stepLimit,
                  caloriesLimit,
                  proteinsLimit,
                  fatsLimit,
                  carbsLimit,
                  name
                );
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 24,
                  marginTop: 50,
                  borderWidth: 1,
                  borderRadius: 10,
                  textAlign: "center",
                  color: "green",
                }}
              >
                Zarejestruj się!
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Login;
