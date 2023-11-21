import React from 'react';
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
  ScrollViewComponent,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
const Ingredient = () => {
  const xmarksvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#242424',
            fontFamily: 'Roboto-Regular',
            fontSize: 12,
          }}>
          Napój energetyczny DZIK Energy Grape
        </Text>
        <View style={{width: 10, height: 10}}>
          <SvgXml
            xml={xmarksvg}
            width="100%"
            height="100%"
            stroke="#242424"
            fill="#242424"></SvgXml>
        </View>
      </View>
      <Text
        style={{color: '#9a9a9a', fontFamily: 'Roboto-Light', fontSize: 10}}>
        1 x Puszka (500ml)
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: '#9a9a9a',
            fontFamily: 'Roboto-Light',
            fontSize: 10,
            borderRightWidth: 0.5,
            borderColor: '#9a9a9a',
            width: 40,
            marginRight: 5,
          }}>
          0
        </Text>
        <Text
          style={{
            color: '#9a9a9a',
            fontFamily: 'Roboto-Light',
            fontSize: 10,
            borderRightWidth: 0.5,
            borderColor: '#9a9a9a',
            width: 40,
            marginRight: 5,
          }}>
          0
        </Text>
        <Text
          style={{
            color: '#9a9a9a',
            fontFamily: 'Roboto-Light',
            fontSize: 10,
            borderRightWidth: 0.5,
            borderColor: '#9a9a9a',
            width: 40,
            marginRight: 5,
          }}>
          0
        </Text>
        <Text
          style={{color: '#9a9a9a', fontFamily: 'Roboto-Light', fontSize: 10}}>
          0
        </Text>
      </View>
    </View>
  );
};

export default Ingredient;
