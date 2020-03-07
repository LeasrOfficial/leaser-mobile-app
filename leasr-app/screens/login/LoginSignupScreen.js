import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, } from 'react-native';
import Colors from '../../constants/colors';
import { FontAwesome } from '@expo/vector-icons';

import InputField from '../../components/InputField';
import RoundButton from '../../components/RoundButton';
import RoundButtonIcon from '../../components/buttons/RoundButtonIcon';
import { Button } from 'react-native-paper';

const LoginScreen = props => {
    const { navigate } = props.navigation;

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
                    <RoundButton 
                        buttonStyle={styles.button} 
                        text={'Continue'} 
                        pressed={() => navigate('FourthPage')}
                    />
                    <View style={styles.transition}>
                        <Text style={styles.transitionText}>OR</Text>
                    </View>
                    <View style={{marginTop: 10}}>
                        <RoundButtonIcon 
                            buttonStyle={styles.buttonFacebook} 
                            textStyle={styles.facebookText} 
                            text={'Continue with Facebook'}
                            icon={<FontAwesome name='facebook' size={20} style={{color: 'white', position: 'relative', left: 30, zIndex: 8}}/>}
                            underlay={'#3b5998'}
                        />
                        <RoundButtonIcon 
                            buttonStyle={styles.buttonApple} 
                            textStyle={styles.appleGoogleTextStyle} 
                            text={'Continue with Apple'}
                            icon={<FontAwesome name='apple' size={20} style={{color: 'black', position: 'relative', left: 30, zIndex: 8}}/>}
                            underlay={'white'}
                        />
                        <RoundButtonIcon 
                            buttonStyle={styles.buttonGoogle} 
                            textStyle={styles.appleGoogleTextStyle} 
                            text={'Continue with Google'}
                            icon={<FontAwesome name='google' size={20} style={{color: 'black', position: 'relative', left: 30, zIndex: 8}}/>}
                            underlay={'white'}
                        />
                        </View>
                        <Text onPress={() => navigate('SecondPage')}>Already have an account?</Text>
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
    buttonApple: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        marginBottom: 15,
    },
    buttonGoogle: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3b5998',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        marginBottom: 15,
    },
    otherButtons: {
        flex: 1,
    },
    appleGoogleTextStyle: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        width: '100%'
    }
});

export default LoginScreen;