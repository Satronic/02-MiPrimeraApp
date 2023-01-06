import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container} >
      <View style={styles.cajaVerde} />
      <View style={styles.cajaAmarilla} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

// Ejercicio 1
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   cajaVerde: {
//     flex: 0.1,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//   },
//   cajaAmarilla: {
//     flex: 0.8,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//   },
//   cajaNaranja: {
//     flex: 0.1,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//   },
// });

// Ejercicio 2
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//   },
//   cajaVerde: {
//     flex: 0.1,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//   },
//   cajaAmarilla: {
//     flex: 0.1,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//   },
//   cajaNaranja: {
//     flex: 0.1,
//     width: '100%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//   },
// });

// Ejercicio 3
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//   },
//   cajaVerde: {
//     flex: 0.1,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//     alignSelf: 'flex-end',
//   },
//   cajaAmarilla: {
//     flex: 0.1,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//     alignSelf: 'flex-start',
//   },
//   cajaNaranja: {
//     flex: 0.1,
//     width: '20%',
//     // height: 100,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//     alignSelf: 'center',
//   },
// });

// Ejercicio 4
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cajaVerde: {
//     // flex: 0.1,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//     alignSelf: 'flex-end',
//   },
//   cajaAmarilla: {
//     // flex: 0.1,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//     alignSelf: 'center',
//   },
//   cajaNaranja: {
//     // flex: 0.1,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//     alignSelf: 'flex-start',
//   },
// });

// Ejercicio 5
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cajaVerde: {
//     // flex: 0.1,
//     width: 80,
//     height: '100%',
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//     // alignSelf: 'flex-end',
//   },
//   cajaAmarilla: {
//     // flex: 0.1,
//     width: 80,
//     height: '100%',
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//     // alignSelf: 'center',
//   },
//   cajaNaranja: {
//     // flex: 0.1,
//     width: 80,
//     height: '100%',
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//     // alignSelf: 'flex-start',
//   },
// });

// Ejercicio 6
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     flexDirection: 'column',
//     // justifyContent: 'space-between',
//   },
//   cajaVerde: {
//     flex: 0.25,
//     width: '100%',
//     // height: '100%',
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//     // alignSelf: 'flex-end',
//   },
//   cajaAmarilla: {
//     flex: 0.25,
//     width: '100%',
//     // height: '100%',
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//     // alignSelf: 'center',
//   },
//   cajaNaranja: {
//     flex: 0.5,
//     width: '100%',
//     // height: '100%',
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//     // alignSelf: 'flex-start',
//   },
// });

// Ejercicio 7
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaVerde: {
//     // flex: 0.25,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//     // alignSelf: 'flex-end',
//   },
//   cajaAmarilla: {
//     // flex: 0.25,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//     // alignSelf: 'center',
//   },
//   cajaNaranja: {
//     // flex: 0.5,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//     // alignSelf: 'flex-start',
//   },
// });

// Ejercicio 8
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaVerde: {
//     // flex: 0.25,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'green',
//     // alignSelf: 'flex-end',
//     top: 80,
//   },
//   cajaAmarilla: {
//     // flex: 0.25,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'yellow',
//     // alignSelf: 'center',
//     left: 80,
//   },
//   cajaNaranja: {
//     // flex: 0.5,
//     width: 80,
//     height: 80,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: 'orange',
//     // alignSelf: 'flex-start',
//   },
// });

// Ejercicio 8
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaVerde: {
    // flex: 0.25,
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'green',
    // alignSelf: 'flex-end',
    // top: 80,
  },
  cajaAmarilla: {
    // flex: 0.25,
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'yellow',
    // alignSelf: 'center',
    top: 40,
  },
  cajaNaranja: {
    // flex: 0.5,
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'orange',
    // alignSelf: 'flex-start',
  },
});
