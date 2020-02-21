import React, { useEffect } from 'react';
import { StyleSheet, Platform } from 'react-native';

import * as Font from 'expo-font';
import MainNavigation  from './navigation/MainNavigation';
import LoginSignup from './screens/login/LoginSignupScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = createStackNavigator({
    FirstPage: { screen: LoginSignup }, 
    SecondPage: { screen: MainNavigation }, 
  },
  {
    initialRouteParams: 'FirstPage',
    headerMode: 'none'
  }
);

const styles = StyleSheet.create({

});

export default createAppContainer(App);
