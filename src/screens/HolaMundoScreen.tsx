/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';


export const HolaMundoScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
      }}>
        Te amo ♣
      </Text>
    </View>
  );
};
