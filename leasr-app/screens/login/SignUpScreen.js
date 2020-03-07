import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import RoundButton from '../../components/RoundButton';
import RoundButtonIcon from '../../components/buttons/RoundButtonIcon';
import InputField from '../../components/InputField';
import Colors from '../../constants/colors';



const SignUpScreen = props => {
    const { navigate } = props.navigation;
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.textStyleMain}>Create New Account</Text>
                <InputField
                    blurOnSubmit
                    customStyle={{marginBottom: 30}}
                    autoCorrect={false}
                    placeholder="Full Name"
                    keyboardType='email-address'
                    selectionColor={Colors.primary}
                    autoCapitalize='none'
                    autoCompleteType='email'
                />
                <InputField
                    blurOnSubmit
                    customStyle={{marginBottom: 30}}
                    autoCorrect={false}
                    placeholder="Phone Number"
                    keyboardType='email-address'
                    selectionColor={Colors.primary}
                    autoCapitalize='none'
                    autoCompleteType='email'
                />
                <InputField
                    blurOnSubmit
                    customStyle={{marginBottom: 30}}
                    autoCorrect={false}
                    placeholder="Email"
                    keyboardType='email-address'
                    selectionColor={Colors.primary}
                    autoCapitalize='none'
                    autoCompleteType='email'
                />
                <InputField
                    blurOnSubmit
                    customStyle={{marginBottom: 30}}
                    autoCorrect={false}
                    placeholder="Password"
                    keyboardType='default'
                    selectionColor={Colors.primary}
                    autoCapitalize='none'
                    autoCompleteType='password'
                />
                <RoundButton 
                    buttonStyle={styles.button} 
                    text={'Sign Up'} 
                    pressed={() => navigate('ThirdPage')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcomeContainer: {
        flex: 1,
        alignContent: 'center',
        marginTop: 30,
        padding: 20,
    },
    textStyleMain: {
        fontSize: 30,
        color: 'black',
        fontWeight: '300',
        marginBottom: 40,
    },
    transition: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    transitionText: {
        fontWeight: '800',
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        marginBottom: 10,
        
    },
    buttonFacebook: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3b5998',
        backgroundColor: '#3b5998',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        marginBottom: 15,
    },
    facebookText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        width: '100%'
    },
});

export default SignUpScreen;