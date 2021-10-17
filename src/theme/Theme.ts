import {DefaultTheme} from '@react-navigation/native';
import Colors from './Colors';

import {TransitionPresets} from '@react-navigation/stack';

export const screenOptions = {
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'left',
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primaryColor,
    card: Colors.primaryColor,
    text: Colors.white,
  },
};
