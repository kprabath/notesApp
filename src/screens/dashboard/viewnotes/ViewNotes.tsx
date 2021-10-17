/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserNotes} from '../../../store/actions/Application.action';
import Colors from '../../../theme/Colors';
import {Reducers} from '../../../types';
import ListItem2 from './components/ListItem.component';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserNotes());
  }, []);
  const {notes, user} = useSelector((state: Reducers) => state.application);
  const title =
    notes.length > 0
      ? `Hi welcome back ${user?.userName} !`
      : `Hi ${user?.userName} ! Lets add some notes to get Started`;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={{flex: 1}}
        data={notes}
        renderItem={({item}) => <ListItem2 item={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.black,
    padding: 20,
  },
});
