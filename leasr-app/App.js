import React, { useEffect } from 'react';
import { StyleSheet, Platform } from 'react-native';

import * as Font from 'expo-font';
import MainNavigation  from './navigation/MainNavigation';
import LoginSignup from './screens/login/LoginSignupScreen';
import Login from './screens/login/SignInScreen';
import SignUp from './screens/login/SignUpScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = createStackNavigator({
    FirstPage: { screen: LoginSignup }, 
    SecondPage: { screen: Login }, 
    ThirdPage: { screen: MainNavigation},
    FourthPage: { screen: SignUp },
  },
  {
    initialRouteParams: 'FirstPage',
    headerMode: 'none'
  }
);

const styles = StyleSheet.create({

});

export default createAppContainer(App);
