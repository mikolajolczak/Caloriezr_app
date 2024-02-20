/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
} from "react-native";

import Head from "./Head";
import Feed from "./Feed";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Foot from "./Foot";
import Buttons from "./Buttons";
import ModalChangeSteps from "./ModalChangeSteps";
import ModalChangeLimits from "./ModalChangeLimits";
import ModalAddMeal from "./ModalAddMeal";

type HomeData = {
  email: any;
  password: any;
};

const Home = (props: HomeData) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const personwalkingsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"/></svg>`;
  const watersvg = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3H275.3c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0H32zM73 156.5L66.4 64H317.6L311 156.5l-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0c-20.9-10.4-45.5-10.4-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L73 156.5z"/></svg>`;
  const firesvg = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>`;
  const [firsttime, setFirstTime] = useState(true);
  const [updateLimit, setUpdateLimit] = useState(true);
  const [achievements, setAchievements] = useState([]);
  const [username, setUsername] = useState(null);
  const [drunkwater, setDrunkWater] = useState(0);
  const [macros, setMacros] = useState([]);
  const [meals, setMeals] = useState([]);
  const [events, setEvents] = useState([]);
  const [walks, setWalks] = useState(null);
  const [steps, setSteps] = useState(0);
  const [dailyMeals, setDailyMeals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [mealModalVisible, setMealModalVisible] = useState(false);
  const [trainings, setTrainings] = useState(null);
  const [burntCalories, setBurntCalories] = useState(0);
  const getDailySteps = (walks) => {
    let dailySteps = 0;
    let distance = 0;
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    let tommorow = new Date();
    tommorow.setUTCHours(23, 59, 59, 59);
    walks.forEach((walk) => {
      let ending_date = new Date(walk.Date_End);
      if (
        ending_date.getTime() > today.getTime() &&
        ending_date.getTime() < tommorow.getTime()
      ) {
        dailySteps += walk.Steps;
        distance += walk.Length;
      }
    });
    setAchievements((oldAchievements) => [
      ...oldAchievements,
      {
        svg: personwalkingsvg,
        description: "Pokonany dystans",
        unit: "m",
        number: distance,
      },
    ]);
    setSteps(dailySteps);
  };
  const getDailyMacros = (
    meals,
    calories_limit,
    carbs_limit,
    fats_limit,
    proteins_limit
  ) => {
    let dailycalories = 0;
    let dailycarbs = 0;
    let dailyproteins = 0;
    let dailyfats = 0;
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    let tommorow = new Date();
    tommorow.setUTCHours(23, 59, 59, 59);
    meals.forEach((meal) => {
      let date = new Date(meal.Date);
      if (
        date.getTime() > today.getTime() &&
        date.getTime() < tommorow.getTime()
      ) {
        setEvents((oldEvents) => {
          let i = 0,
            j = 0;
          const result = [];
          while (i < oldEvents.length && j < meals.length) {
            if (
              new Date(oldEvents[i].Date_End).getTime() <
              new Date(meals[j].Date_End).getTime()
            ) {
              result.push(oldEvents[i]);
              i++;
            } else {
              result.push({ ...meals[j], typeofevent: "food" });
              j++;
            }
          }
          while (i < oldEvents.length) {
            result.push(oldEvents[i]);
            i++;
          }

          while (j < meals.length) {
            result.push({ ...meals[j], typeofevent: "food" });
            j++;
          }
          return result;
        });
        if (meal.IsDone) {
          meal.products.forEach((product) => {
            let multiplier = product.Quantity / product.Size;
            dailycalories += product.Calories * multiplier;
            dailycarbs += product.Carbons * multiplier;
            dailyproteins += product.Proteins * multiplier;
            dailyfats += product.Fats * multiplier;
          });
        }
      }
    });
    setMacros((oldMacros) => [
      ...oldMacros,
      {
        maxvalue: calories_limit,
        value: dailycalories,
        description: "Kalorie",
        unit: "kcal",
      },
    ]);
    setMacros((oldMacros) => [
      ...oldMacros,
      {
        maxvalue: carbs_limit,
        value: dailycarbs,
        description: "Węgl.",
        unit: "g",
      },
    ]);
    setMacros((oldMacros) => [
      ...oldMacros,
      {
        maxvalue: fats_limit,
        value: dailyfats,
        description: "Tłuszcze",
        unit: "g",
      },
    ]);
    setMacros((oldMacros) => [
      ...oldMacros,
      {
        maxvalue: proteins_limit,
        value: dailyproteins,
        description: "Białka",
        unit: "g",
      },
    ]);
  };
  const getDailyWaters = (waters) => {
    let dailyWater = 0;
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    let tommorow = new Date();
    tommorow.setUTCHours(23, 59, 59, 59);
    waters.forEach((water) => {
      let date = new Date(water.Date);
      if (date.getTime() == today.getTime()) {
        dailyWater += water.Drunk_Water;
      }
    });
    setDrunkWater(dailyWater);
    setAchievements((oldAchievements) => [
      ...oldAchievements,
      {
        svg: watersvg,
        description: "Wypita Woda",
        unit: "ml",
        number: dailyWater,
      },
    ]);
  };
  const addTrainingToEvents = (trainings) => {
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    let tommorow = new Date();
    tommorow.setUTCHours(23, 59, 59, 59);
    setEvents((oldEvents) => {
      let i = 0,
        j = 0;
      const result = [];
      while (i < oldEvents.length && j < trainings.length) {
        if (
          new Date(oldEvents[i].Date_End).getTime() <
          new Date(trainings[j].Date_End).getTime()
        ) {
          result.push(oldEvents[i]);
          i++;
        } else {
          if (
            new Date(trainings[j].Date_End).getTime() < tommorow.getTime() &&
            new Date(trainings[j].Date_End).getTime() > today.getTime()
          ) {
            result.push({ ...trainings[j], typeofevent: "training" });
          }
          j++;
        }
      }
      while (i < oldEvents.length) {
        result.push(oldEvents[i]);
        i++;
      }

      while (j < trainings.length) {
        if (
          new Date(trainings[j].Date_End).getTime() < tommorow.getTime() &&
          new Date(trainings[j].Date_End).getTime() > today.getTime()
        ) {
          result.push({ ...trainings[j], typeofevent: "training" });
        }
        j++;
      }
      return result;
    });
  };

  const getUserInformation = async (password, email) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/user",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: password, email: email }),
        }
      );
      const json = await response.json();
      setUsername(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserWalks = async (password, email) => {
    let startOfTheWeek: Date;
    let currentDay = new Date();
    if (currentDay.getDay() == 1) {
      startOfTheWeek = currentDay;
    } else {
      startOfTheWeek = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate() -
          (currentDay.getDay() == 0
            ? currentDay.getDay() + 6
            : currentDay.getDay() - 1)
      );
    }
    startOfTheWeek.setHours(0, 0, 0, 0);
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/walk",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            date_start: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      getDailySteps(json);
      setWalks(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getUserWaters = async (password, email) => {
    let startOfTheWeek: Date;
    let currentDay = new Date();
    if (currentDay.getDay() == 1) {
      startOfTheWeek = currentDay;
    } else {
      startOfTheWeek = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate() -
          (currentDay.getDay() == 0
            ? currentDay.getDay() + 6
            : currentDay.getDay() - 1)
      );
    }
    startOfTheWeek.setHours(0, 0, 0, 0);
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/water",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            date: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      getDailyWaters(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getUserMeals = async (password, email) => {
    let startOfTheWeek: Date;
    let currentDay = new Date();
    if (currentDay.getDay() == 1) {
      startOfTheWeek = currentDay;
    } else {
      startOfTheWeek = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate() -
          (currentDay.getDay() == 0
            ? currentDay.getDay() + 6
            : currentDay.getDay() - 1)
      );
    }
    startOfTheWeek.setHours(0, 0, 0, 0);
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/meals",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            date: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      getDailyMacros(
        json.meals,
        json.calories_limit,
        json.carbs_limit,
        json.fats_limit,
        json.proteins_limit
      );
    } catch (error) {
      console.error(error);
    }
  };
  const getUserTrainings = async (password, email) => {
    let startOfTheWeek: Date;
    let currentDay = new Date();
    if (currentDay.getDay() == 1) {
      startOfTheWeek = currentDay;
    } else {
      startOfTheWeek = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate() -
          (currentDay.getDay() == 0
            ? currentDay.getDay() + 6
            : currentDay.getDay() - 1)
      );
    }
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/training",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            starting_date: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      if (response.status == 200) {
        addTrainingToEvents(json);
        getBurntCalories(json);
        setTrainings(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getBurntCalories = (trainings) => {
    let now = 0;
    trainings.forEach((training) => {
      if (training.IsDone) {
        training.exercises.forEach((exercise) => {
          now += exercise.Calories_Loss;
        });
      }
    });
    setBurntCalories(now);
    setAchievements((oldAchievements) => [
      ...oldAchievements,
      {
        svg: firesvg,
        description: "Spalone Kalorie",
        unit: "kcal",
        number: 0,
      },
    ]);
  };
  useEffect(() => {
    const fetchData = async () => {
      Promise.all([
        getUserInformation(props.password, props.email),
        getUserWalks(props.password, props.email),
        getUserWaters(props.password, props.email),
        getUserTrainings(props.password, props.email),
        getUserMeals(props.password, props.email),
      ]);
    };
    if (firsttime) {
      setFirstTime(false);
      fetchData()
        .then(() => setFirstTime(false))
        .catch(console.error);
    }
    if (updateLimit) {
      getUserInformation(props.password, props.email);
      setUpdateLimit(false);
    }
  });
  if (firsttime == false) {
    return (
      <View
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 25,
          backgroundColor: "white",
          height: windowHeight,
          width: windowWidth,
        }}
      >
        <ModalChangeSteps
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setFirstTime={setUpdateLimit}
        />
        <ModalChangeLimits
          modalVisible={settingsModalVisible}
          setModalVisible={setSettingsModalVisible}
          setFirstTime={setUpdateLimit}
        />
        <ModalAddMeal
          modalVisible={mealModalVisible}
          setModalVisible={setMealModalVisible}
          setFirstTime={setUpdateLimit}
        />
        <Head name={username == null ? "" : username.name} />
        <Feed
          steps={username == null ? 0 : steps}
          maxSteps={username == null ? 0 : username.step_limit}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Achievements achievements={achievements} />
        <Statistics statistics={macros} />
        <Buttons
          modalSettingsVisible={settingsModalVisible}
          setModalSettingsVisible={setSettingsModalVisible}
          modalMealVisible={mealModalVisible}
          setModalMealVisible={setMealModalVisible}
        />
        <Calendar events={events} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Pobieramy dane</Text>
      </View>
    );
  }
};

export default Home;
