import React from 'react';
import { View, StyleSheet, useWindowDimensions, Text } from 'react-native';

export const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{
          ...styles.cajaIzq,
          width: width * 0.5, // Usa como variable las dimensiones de la pantalla
        }}/>
        <View style={styles.cajaDer}/>
      </View>
      <Text>{`${width.toFixed()}px`} - {`${height.toFixed()}px`} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: '50%',
    backgroundColor: 'green',
  },
  cajaIzq: {
    backgroundColor: 'yellow',
    width: '50%',
    height: '50%',
  },
  cajaDer: {
    backgroundColor: 'orange',
    width: '50%',
    height: '20%',
  },
});
