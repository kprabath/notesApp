import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import UserNameScreen from '../screens/auth/UserNameScreen';
import {
  ADD_NOTES_SCREEN,
  LOGIN_SCREEN,
  USER_NAME_SCREEN,
  VIEW_NOTES_SCREEN,
} from '../constants';
import ViewNotes from '../screens/dashboard/viewnotes/ViewNotes';
import AddNotes from '../screens/dashboard/AddNotes';
import AddButton from '../components/common/AddButton';
import {navigate} from './NavigationService';

const Stack = createStackNavigator();

export const AuthRoutes = (
  <>
    <Stack.Screen
      component={LoginScreen}
      name={LOGIN_SCREEN}
      options={{title: 'Scan QR code'}}
    />
    <Stack.Screen
      options={{headerTitleAlign: 'center'}}
      component={UserNameScreen}
      name={USER_NAME_SCREEN}
    />
  </>
);

export const HomeRoutes = (
  <>
    <Stack.Screen
      component={ViewNotes}
      options={{
        headerRight: () => (
          <AddButton onPress={() => navigate(ADD_NOTES_SCREEN)} />
        ),
      }}
      name={VIEW_NOTES_SCREEN}
    />
    <Stack.Screen
      component={AddNotes}
      options={{headerTitleAlign: 'center'}}
      name={ADD_NOTES_SCREEN}
    />
  </>
);
