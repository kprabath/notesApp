/* eslint-disable react-native/no-inline-styles */
import {StackNavigationProp} from '@react-navigation/stack';
import moment from 'moment';
import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/common/Button';
import InputView from '../../components/common/InputView';
import {ADD_NOTES_SCREEN} from '../../constants';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../library/functions';
import {navigationRef} from '../../navigation/NavigationService';
import {createNoteObj} from '../../store/actions/Application.action';
import Colors from '../../theme/Colors';
import {HomeStackParamList, Reducers} from '../../types';

type ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  typeof ADD_NOTES_SCREEN
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: Reducers) => state.application);
  const [subject, setSubject] = useState(null);
  const [content, setContent] = useState(null);

  const addUserNote = () => {
    if (!subject || !content) {
      return;
    }
    dispatch(
      createNoteObj(
        {
          subject: subject,
          content,
          createdTime: moment().format(),
          userD: user,
        },
        () => navigationRef.goBack(),
      ),
    );
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <ScrollView
        contentContainerStyle={styles.mobileContainer}
        keyboardShouldPersistTaps="always">
        <InputView
          value={subject || ''}
          setTxt={setSubject}
          placeHolder="Add a subject..."
          customStyle={{marginVertical: 40}}
        />
        <InputView
          value={content || ''}
          setTxt={setContent}
          placeHolder="Add The Content..."
          customStyle={{height: SCREEN_HEIGHT * 0.4}}
          multiline
        />
      </ScrollView>
      <Button
        text="Submit"
        onPress={addUserNote}
        customStyles={{
          marginBottom: 30,
          marginHorizontal: 20,
          paddingVertical: 15,
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mobileContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
