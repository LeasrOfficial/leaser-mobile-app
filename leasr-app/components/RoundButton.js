
import React, { Component } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

import Colors from '../constants/colors';

const RoundButton = props => {
    return (
        <TouchableHighlight style={props.buttonStyle} underlayColor={Colors.primary} activeOpacity={1} onPress={props.pressed}>
            <Text style={styles.textStyle}>{props.text}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
        buttonContainer: {
            flex: 1,
            padding: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors.primary,
            backgroundColor: Colors.primary,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 5,
        },
        textStyle: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: '600',
            width: '100%'
        }
});

export default RoundButton;