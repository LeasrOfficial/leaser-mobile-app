import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';

const InputField = props => {
    return (
        <View style={styles.container}>
            <TextInput 
                {...props}
                style={[props.customStyle, styles.input]}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    input: {
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 5,
    }
});

export default InputField;