/* eslint-disable eol-last */
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

interface FloatButtonProps {
  title: string;
  onPress: () => void;
  position: 'bottomLeft' | 'bottomRight';
}

export const FloatButton = ({ title, onPress, position }: FloatButtonProps) => {

  const android = () => {
    return (
      <View
        style={position === 'bottomLeft' ? styles.floatButtonBL : styles.floatButtonBR}
      >
        <TouchableNativeFeedback
            onPress = {onPress}
            background = {TouchableNativeFeedback.Ripple('black', false, 30)}
          >
            <View style={styles.floatButton}>
              <Text style={styles.floatButtonText}>
                {title}
              </Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <TouchableOpacity
        style={position === 'bottomLeft' ? styles.floatButtonBL : styles.floatButtonBR}
        activeOpacity = {0.75}
        onPress = {onPress}
      >
        <View style={styles.floatButton}>
          <Text style={styles.floatButtonText}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (Platform.OS === 'ios' ? ios() : android());
};

const styles = StyleSheet.create({
  floatButtonBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  floatButtonBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  floatButton: {
    backgroundColor: 'green',
    borderRadius: 100,
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  floatButtonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});