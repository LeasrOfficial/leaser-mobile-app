
import React, { Component } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

import Colors from '../../constants/colors';


const RoundButtonIcon = props => {
    return (
        <TouchableHighlight style={props.buttonStyle} underlayColor={props.underlay} activeOpacity={1} onPress={props.pressed}>
            <View style={styles.wrapper}>
                {props.icon}
                <Text style={props.textStyle}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export default RoundButtonIcon;