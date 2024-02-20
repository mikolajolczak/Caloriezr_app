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

const ModalChangeSteps = (props: changeStepsData) => {
  const updateMaxSteps = async (password, email, new_limit: number) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/change/walk/limit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            new_limit: new_limit,
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
  const [text, onChangeText] = React.useState("");
  return (
    <Modal
      isVisible={props.modalVisible}
      useNativeDriver={true}
      onBackButtonPress={() => {
        props.setModalVisible(false);
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
          Zmień dzienny cel kroków
        </Text>
        <TextInput
          placeholder="Np. 25000"
          onChangeText={onChangeText}
          value={text}
          style={{
            fontFamily: "Roboto-Regular",
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
            updateMaxSteps(123, "molczak@wp.pl", parseInt(text));
            onChangeText("");
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

export default ModalChangeSteps;
