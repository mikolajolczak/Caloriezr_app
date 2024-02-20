import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Achievement from "./Achievement";

type achievementData = {
  achievements: any[];
};

const Achievements = (props: achievementData) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.blackText}>Dzisiejsze osiągnięcia</Text>
      <ScrollView
        style={styles.scroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {props.achievements.map((achievementInfo, index) => (
          <Achievement
            svg={achievementInfo.svg}
            description={achievementInfo.description}
            number={achievementInfo.number}
            unit={achievementInfo.unit}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scroll: { flexDirection: "row", scaleX: -1 },
  text: {
    marginLeft: 200,
    scaleX: -1,
  },
  wrapper: { paddingBottom: 15 },
  blackText: { color: "black", fontSize: 16, fontFamily: "Roboto-Regular" },
});
export default Achievements;
