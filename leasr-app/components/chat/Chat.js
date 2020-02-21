import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { ScrollView } from 'react-native-gesture-handler';


const Chat = props => {
    const navigationOptions = ({ navigation }) => ({
        title: (naivgation.params || {}).name || 'Chat!',
    });

    const [messages, changeMessages] = useState([]);

    return (
        <GiftedChat message={messages}/>
    );
}

const styles = StyleSheet.create({

});

export default Chat;