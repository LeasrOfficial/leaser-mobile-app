import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ListView } from 'react-native';




const MainChat = props => {
    const [name, setEnteredName] = useState('')

    const onChangeText = name => {
        setEnteredName(name);
    }

    const onPress = () => {
        props.navigation.navigate('Chat', { name: name })
    }

    return (
        <View>
            
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.button}>Next</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    name: {
        height: 48,
        margin: 24,
        paddingHorizontal: 24,
        borderColor: '#111111',
        borderWidth: 1,
    },
    button: {
        marginLeft: 24,
        fontSize: 24,
    },
    title: {
        marginTop: 24,
        marginLeft: 24,
        fontSize: 24,
    }
});

export default MainChat;