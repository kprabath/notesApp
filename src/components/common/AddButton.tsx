import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../theme/Colors';

export default ({onPress}: {onPress: Function}) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress()}>
    <Icon name="add-circle" size={30} color={Colors.white} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10},
});
