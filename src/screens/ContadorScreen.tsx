/* eslint-disable eol-last */
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FloatButton } from '../components/FloatButton';

export const ContadorScreen = () => {

  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>

      <FloatButton
        title="-1"
        onPress={() => setContador(contador - 1)}
        position="bottomLeft"
      />

      <FloatButton
        title="+1"
        onPress={() => setContador(contador + 1)}
        position="bottomRight"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    position: 'relative',
    top: -30,
  },
});