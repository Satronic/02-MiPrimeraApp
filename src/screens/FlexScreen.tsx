import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cajaUno}>Caja 1</Text>
      <Text style={styles.cajaDos}>Caja 2</Text>
      <Text style={styles.cajaTres}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  // 1. Para que todos tengan el mismo tamaño todos llevarian valor flex: 1
  // 2. Por defecto la dirección es flexCol
  cajaUno: {
    // flex: 0.1, // Porcentaje relativo al tamaño del contenedor padre
    alignSelf: 'center', // Ubicación independiente de cada hijo
    borderWidth: 2,
    borderColor: 'yellow',
    color: 'white',
    fontSize: 24,
  },
  cajaDos: {
    // flex: 0.2, // Porcentaje relativo al tamaño del contenedor padre
    borderWidth: 2,
    borderColor: 'yellow',
    color: 'white',
    fontSize: 24,
  },
  cajaTres: {
    // flex: 0.7, // Porcentaje relativo al tamaño del contenedor padre
    borderWidth: 2,
    borderColor: 'yellow',
    color: 'white',
    fontSize: 24,
  },
});
