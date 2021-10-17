import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Colors from '../../theme/Colors';

export default ({
  onPress,
  customStyles,
  text,
}: {
  onPress: Function;
  customStyles?: StyleProp<ViewStyle>;
  text: string;
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, customStyles]}>
    <Text style={styles.color}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: Colors.primaryColor,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  color: {color: Colors.white},
});
