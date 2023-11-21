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
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MealList from "./MealList";
import Water from "./Water";
import Statistics from "./Statistics";
import Modal from "react-native-modal";
type changeStepsData = {
  modalVisible: boolean;
  setModalVisible: Function;
};

const updateMaxSteps = async (maxsteps: number) => {
  try {
    const response = await fetch(
      "https://shaped-glazing-402314.lm.r.appspot.com/user/maxsteps",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1, maxsteps: maxsteps }),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const ModalChangeSteps = (props: changeStepsData) => {
  const [text, onChangeText] = React.useState("");
  return (
    <Modal isVisible={props.modalVisible} useNativeDriver={true}>
      <View style={{ backgroundColor: "white" }}>
        <TextInput
          placeholder="Np. 25000"
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          title="Send data"
          onPress={() => {
            props.setModalVisible(!props.modalVisible);
            updateMaxSteps(parseInt(text));
            onChangeText("");
          }}
        />
      </View>
    </Modal>
  );
};

export default ModalChangeSteps;
