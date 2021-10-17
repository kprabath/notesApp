import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default ({
  setTxt,
  customStyle,
  placeHolder,
  multiline = false,
  value,
}: {
  setTxt: Function;
  customStyle?: StyleProp<ViewStyle>;
  placeHolder: string;
  multiline?: boolean;
  value: string;
}) => (
  <TextInput
    onChangeText={text => setTxt(text)}
    autoCompleteType={'off'}
    autoCapitalize={'none'}
    autoCorrect={false}
    value={value}
    multiline={multiline}
    placeholder={placeHolder}
    placeholderTextColor="#000"
    style={[styles.input, customStyle]}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: 'lightgrey',
    color: '#000',
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});
