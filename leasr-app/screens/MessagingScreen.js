import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MessagingNavigation from '../navigation/MessagingNavigation';

const MessagingScreen = props => {
    return (
        <MessagingNavigation />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MessagingScreen;