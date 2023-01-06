import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaAmarilla}/>
      <View style={styles.cajaMagenta}/>
    </View>
  );
};
// Por defecto todos los componentes hijo tienen posición relativa al padre
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cajaAmarilla: {
    backgroundColor: 'yellow',
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'orange',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject, // bottom: 0, top: 0, left: 0, right: 0
    // top: 50,
    // left: 50,
  },
  cajaMagenta: {
    backgroundColor: 'magenta',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'orange',
    position: 'absolute',
    // right: 0,
  },
});
