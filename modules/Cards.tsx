import React, { useEffect, useState } from "react";
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
import Card from "./Card";
import CardTraining from "./CardTraining";
import AddCard from "./AddCard";
import ModalAddTraining from "./ModalAddTraining";
import ModalTrainingInfo from "./ModalTrainingInfo";
import ModalAddWalk from "./ModalAddWalk";
import AddCardWalk from "./AddCardWalk";
type CardsData = {
  walks: any[];
  trainings: any[];
};
const Cards = (props: CardsData) => {
  const [activities, setActivities] = useState([]);
  const [training, setTraining] = useState([]);
  useEffect(() => {
    let ouput = [];
    let i = 0;
    let j = 0;
    while (i < props.walks.length && j < props.trainings.length) {
      if (
        new Date(props.walks[i].Date_Start).getTime() <
        new Date(props.trainings[j].Date_Start).getTime()
      ) {
        ouput.push(props.walks[i]);
        i++;
      } else {
        ouput.push(props.trainings[j]);
        j++;
      }
    }
    while (i < props.walks.length) {
      ouput.push(props.walks[i]);
      i++;
    }
    while (j < props.trainings.length) {
      ouput.push(props.trainings[j]);
      j++;
    }
    setActivities(ouput);
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTrainingVisible, setModalTrainingVisible] = useState(false);
  const [modalWalkVisible, setModalWalkVisible] = useState(false);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <ModalAddTraining
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setFirstTime={setModalVisible}
      />
      <ModalTrainingInfo
        modalVisible={modalTrainingVisible}
        setModalVisible={setModalTrainingVisible}
        training={training}
      />
      <ModalAddWalk
        modalVisible={modalWalkVisible}
        setModalVisible={setModalWalkVisible}
        setFirstTime={null}
      />
      <AddCard setModalVisible={setModalVisible} modalVisible={modalVisible} />
      <AddCardWalk
        setModalVisible={setModalWalkVisible}
        modalVisible={modalWalkVisible}
      />
      {activities.map((activity, index) =>
        activity.Steps != null ? (
          <Card
            date_start={activity.Date_Start}
            date_end={activity.Date_End}
            length={activity.Length}
            steps={activity.Steps}
            key={index}
          />
        ) : (
          <CardTraining
            date_start={activity.Date_Start}
            date_end={activity.Date_End}
            exercises={activity.exercises}
            name={activity.Name}
            modalTrainingVisible={modalTrainingVisible}
            setModalTrainingVisible={setModalTrainingVisible}
            setTraining={setTraining}
            trainingId={activity.Id}
            key={index}
          />
        )
      )}
    </ScrollView>
  );
};

export default Cards;
