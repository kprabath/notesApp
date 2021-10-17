import moment from 'moment';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../../../theme/Colors';

const ListItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.margin5}>
      <View style={styles.row}>
        <Text
          style={[
            styles.blackColor,
            styles.titleText,
            styles.bold,
            styles.primaryColorText,
          ]}>
          Subject
        </Text>
        <Text style={[styles.blackColor, styles.date, styles.smallText]}>
          {moment(item?.createdTime).format('MM-dd-yyyy HH:MM a')}
        </Text>
      </View>
      <Text style={[styles.blackColor, styles.smallText]}>{item.subject}</Text>
    </View>
    <Text
      style={[
        styles.blackColor,
        styles.margin5,
        styles.primaryColorText,
        styles.bold,
      ]}>
      Content
    </Text>
    <Text style={[styles.blackColor, styles.fontSize13]}>{item?.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  blackColor: {
    color: Colors.black,
  },
  itemContainer: {
    margin: 10,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  margin5: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  titleText: {fontSize: 16},
  smallText: {fontSize: 11},
  date: {color: Colors.primaryColor},
  bold: {fontWeight: 'bold'},
  primaryColorText: {color: Colors.primaryColor},
  fontSize13: {fontSize: 13},
});

export default ListItem;
