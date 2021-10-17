import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/common/Button';
import InputView from '../../components/common/InputView';
import {USER_NAME_SCREEN} from '../../constants';
import {SCREEN_HEIGHT} from '../../library/functions';
import {createUser} from '../../store/actions/Application.action';
import Colors from '../../theme/Colors';
import {AuthStackParamList, Reducers} from '../../types';

type ScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  typeof USER_NAME_SCREEN
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const {userEmail} = useSelector((state: Reducers) => state.userReducer);

  const createUserAccount = () => {
    dispatch(createUser({userEmail, userName: name}));
  };

  return (
    <View style={styles.container}>
      <InputView value={name} setTxt={setName} placeHolder="Enter your name" />
      <Button onPress={createUserAccount} text="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SCREEN_HEIGHT * 0.1,
    paddingRight: 20,
    paddingLeft: 10,
    backgroundColor: Colors.white,
  },
  button: {
    height: 50,
    backgroundColor: Colors.primaryColor,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  input: {
    height: 60,
    backgroundColor: 'lightgrey',
    color: '#000',
    paddingHorizontal: 10,
  },
});
