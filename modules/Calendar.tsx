import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import CalendarEventFood from "./CalendarEventFood";
import CalendarEventTraining from "./CalendarEventTraining";
import Foot from "./Foot";
type calendarInfo = {
  events: any[];
};
const Calendar = (props: calendarInfo) => {
  const scrollViewRef = useRef();
  const [firstTime, setFirstTime] = useState(true);
  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    return hours + ":" + minutes;
  };
  const updateOffset = (events: any) => {
    let offset = 0;
    events.forEach((event) => {
      if (getCurrentTime() > event.Date) {
        offset += 130;
      } else {
        return offset;
      }
    });
    return offset;
  };
  useEffect(() => {
    if (firstTime == true && props.events.length > 0) {
      scrollViewRef.current.scrollTo({
        x: updateOffset(props.events),
        y: 0,
        animated: false,
      });
      setFirstTime(false);
    }
  }, [props]);
  return (
    <View>
      <Text style={styles.title}>Kalendarz</Text>
      <ScrollView
        style={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        {props.events.map((event, index) =>
          event.typeofevent == "food" ? (
            <CalendarEventFood
              isFocused={
                new Date().getTime() < new Date(event.Date).getTime() &&
                (index > 0
                  ? new Date(props.events[index - 1].Date).getTime() <
                    new Date().getTime()
                  : true)
                  ? true
                  : index == props.events.length - 1
                  ? true
                  : false
              }
              eventData={event}
              key={index}
            />
          ) : (
            <CalendarEventTraining
              isFocused={
                new Date().getTime() < new Date(event.Date).getTime() &&
                (index > 0
                  ? new Date(props.events[index - 1].Date).getTime() <
                    new Date().getTime()
                  : true)
                  ? true
                  : false
              }
              eventData={event}
              key={index}
            />
          )
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    scaleX: -1,
    marginTop: 10,
  },
  title: {
    color: "black",
    fontSize: 16,
    marginTop: 12,
    fontFamily: "Roboto-Regular",
  },
});
export default Calendar;
