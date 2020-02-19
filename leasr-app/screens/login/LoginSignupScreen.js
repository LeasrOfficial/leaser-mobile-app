import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight, Image, TextInput } from 'react-native';
import Colors from '../../constants/colors';

import InputField from '../../components/InputField';

const LoginScreen = props => {
    return (
        <ScrollView style={styles.screen}>
            <View>
                <View style={styles.welcomeContainer}>
                    <Image 
                        style={styles.logoStyle}
                        source={require('../../assets/leasr-brand-green.jpg')}
                    />
                    <Text style={styles.textStyleMain}>Welcome to Leasr!</Text>
                    <Text style={styles.textStyleSecondary}>Let's get started...</Text>
                    <InputField customStyle={{marginBottom: 30}}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcomeContainer: {
        flex: 1,
        marginTop: 30,
        padding: 20,
    },
    textStyleMain: {
        fontSize: 30,
        color: 'black',
        fontWeight: '300',
        marginBottom: 40,
    },
    logoStyle: {
        height: 80, 
        width: 80, 
        borderRadius: 5,
        marginTop: 50,
        marginBottom: 40,
    },
    getStarted: {
        flex: 1,
        padding: 20,
    },
    textStyleSecondary: {
        fontSize: 15,
        color: 'black',
        fontWeight: '300',
    },
    input: {

    }
});

export default LoginScreen;