import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import CameraComponent from '../../components/camera/CameraComponent';
import {LOGIN_SCREEN, USER_NAME_SCREEN} from '../../constants';
import {setUserEmail} from '../../store/actions/User.actions';
import Colors from '../../theme/Colors';
import {AuthStackParamList} from '../../types';

type ScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  typeof LOGIN_SCREEN
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default ({navigation}: Props) => {
  const dispatch = useDispatch();

  const onDetected = (email: string) => {
    dispatch(setUserEmail(email));
    if (email) {
      navigation.navigate(USER_NAME_SCREEN);
    }
  };
  return (
    <View style={styles.container}>
      <CameraComponent onDetected={onDetected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E1E1E1',
  },
  title: {
    color: Colors.primaryColor,
    fontSize: 18,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
