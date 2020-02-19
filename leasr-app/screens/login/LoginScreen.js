import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import Colors from '../../constants/colors';

const LoginScreen = props => {
    return (
        <KeyboardAvoidingView style={styles.screen}>
            
            <View style={styles.loginContainer}>
                <ScrollView>
                    <Text>Login</Text>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
    },
    loginContainer: {
        paddingTop: 20,
        alignItems: 'center'
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 100,

    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 5,
    }
});

export default LoginScreen;