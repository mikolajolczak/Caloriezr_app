import React, { useEffect, useState, useCallback } from "react";
import {
  View, Text
} from "react-native";

import Home from "./modules/Home";
import Scaner from "./modules/Scaner";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import Planner from "./modules/Planner";
import { useFonts } from 'expo-font';
import { Camera, CameraType } from 'expo-camera';
import CameraView from "./modules/CameraView";
import ProductDetails from "./modules/ProductDetails";
import Trainings from "./modules/Trainings";
const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });
  const Tab = createBottomTabNavigator();
  const homesvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>`;
  const barcodesvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>`;
  const utensilssvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>`;
  const heartsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg>`;
  const barssvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCamera, toggleCamera] = useState(false);
  const [initialScreen, setInitialScreen] = useState('scaner');
  const [isScanned, toggleScanned] = useState(false);
  useEffect(() => {
      requestPermission()
    
  }, [isCamera])
  if (fontsLoaded) {
    if (isCamera) { 
      return <CameraView toggleCamera={toggleCamera} toggleScanned={toggleScanned} />;
    } if (isScanned) {
      return <ProductDetails toggleScanned={toggleScanned}/>
    }
    else {
      return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ tabBarStyle: { paddingHorizontal: 25 }}} lazy={false}>
            <Tab.Screen
              name="home"
              component={Home}
              options={{
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color }) => (
                  <SvgXml
                    xml={homesvg}
                    width="50%"
                    height="50%"
                    stroke={focused ? "#2b9453" : "#b1b1ae"}
                    fill={focused ? "#2b9453" : "#b1b1ae"}
                  ></SvgXml>
                ),
                tabBarLabelPosition: "below-icon",
                tabBarLabel: ({ focused, color }) => (
                  <>
                    {focused ? (
                      <View
                        style={{
                          borderBottomColor: "#2b9453",
                          borderBottomWidth: 2,
                          width: 10,
                          marginBottom: 9,
                          marginTop: -9,
                        }}
                      ></View>
                    ) : (
                      <></>
                    )}
                  </>
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="scaner"
              children={()=><Scaner toggleCamera={toggleCamera} toggleScanned={toggleScanned}/>}
              options={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color }) => (
                  <SvgXml
                    xml={barcodesvg}
                    width="50%"
                    height="50%"
                    stroke={focused ? "#2b9453" : "#b1b1ae"}
                    fill={focused ? "#2b9453" : "#b1b1ae"}
                  ></SvgXml>
                ),
                tabBarLabelPosition: "below-icon",
                tabBarLabel: ({ focused, color }) => (
                  <>
                    {focused ? (
                      <View
                        style={{
                          borderBottomColor: "#2b9453",
                          borderBottomWidth: 2,
                          width: 10,
                          marginBottom: 9,
                          marginTop: -9,
                        }}
                      ></View>
                    ) : (
                      <></>
                    )}
                  </>
                ),
              }}
            />
            <Tab.Screen
              name="utensils"
              component={Planner}
              options={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color }) => (
                  <SvgXml
                    xml={utensilssvg}
                    width="50%"
                    height="50%"
                    stroke={focused ? "#2b9453" : "#b1b1ae"}
                    fill={focused ? "#2b9453" : "#b1b1ae"}
                  ></SvgXml>
                ),
                tabBarLabelPosition: "below-icon",
                tabBarLabel: ({ focused, color }) => (
                  <>
                    {focused ? (
                      <View
                        style={{
                          borderBottomColor: "#2b9453",
                          borderBottomWidth: 2,
                          width: 10,
                          marginBottom: 9,
                          marginTop: -9,
                        }}
                      ></View>
                    ) : (
                      <></>
                    )}
                  </>
                ),
              }}
            />
            <Tab.Screen
              name="heart"
              component={Trainings}
              options={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color }) => (
                  <SvgXml
                    xml={heartsvg}
                    width="50%"
                    height="50%"
                    stroke={focused ? "#2b9453" : "#b1b1ae"}
                    fill={focused ? "#2b9453" : "#b1b1ae"}
                  ></SvgXml>
                ),
                tabBarLabelPosition: "below-icon",
                tabBarLabel: ({ focused, color }) => (
                  <>
                    {focused ? (
                      <View
                        style={{
                          borderBottomColor: "#2b9453",
                          borderBottomWidth: 2,
                          width: 10,
                          marginBottom: 9,
                          marginTop: -9,
                        }}
                      ></View>
                    ) : (
                      <></>
                    )}
                  </>
                ),
              }}
            />
            <Tab.Screen
              name="settings"
              children={()=><Scaner toggleCamera={toggleCamera}/>}
              options={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color }) => (
                  <SvgXml
                    xml={barssvg}
                    width="50%"
                    height="50%"
                    stroke={focused ? "#2b9453" : "#b1b1ae"}
                    fill={focused ? "#2b9453" : "#b1b1ae"}
                  ></SvgXml>
                ),
                tabBarLabelPosition: "below-icon",
                tabBarLabel: ({ focused, color }) => (
                  <>
                    {focused ? (
                      <View
                        style={{
                          borderBottomColor: "#2b9453",
                          borderBottomWidth: 2,
                          width: 10,
                          marginBottom: 9,
                          marginTop: -9,
                        }}
                      ></View>
                    ) : (
                      <></>
                    )}
                  </>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
  return (<View><Text>Ładujemy czcionki</Text></View>)
};

export default App;
