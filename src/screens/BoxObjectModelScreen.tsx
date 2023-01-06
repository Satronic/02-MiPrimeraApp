import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BoxObjectModelScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width: '75%',
    height: '50%',
  },
  title: {
    alignSelf: 'center',
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    margin: 20,
    width: 200,
    borderWidth: 5,
    borderColor: 'white',
  },
});
