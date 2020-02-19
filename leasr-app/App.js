import React from 'react';
import { StyleSheet, } from 'react-native';

import * as Font from 'expo-font';
import MainNavigation from './navigation/MainNavigation';
import Login from './screens/login/LoginScreen';
import LoginSignup from './screens/login/LoginSignupScreen';

export default function App() {
  

  return (
    //<MainNavigation />
      //<Login />
      <LoginSignup />
  );
}

const styles = StyleSheet.create({

});
