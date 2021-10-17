/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Reducers} from '../types';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoutes, HomeRoutes} from './AppRoutes';
import {setUserState} from '../store/actions/Application.action';
import {RealmDB} from '../library/Realm';
import Colors from '../theme/Colors';
import {MyTheme, screenOptions} from '../theme/Theme';
import {navigationRef} from './NavigationService';

export default () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const {isLoading, hasLoggedIn} = useSelector(
    (state: Reducers) => state.application,
  );

  useEffect(() => {
    RealmDB.initRealm();
    dispatch(setUserState());
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="red" size={30} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <Stack.Navigator screenOptions={screenOptions}>
          {hasLoggedIn && HomeRoutes}
          {!hasLoggedIn && AuthRoutes}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
