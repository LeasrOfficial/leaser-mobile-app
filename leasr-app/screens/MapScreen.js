import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

const MapScreen = props => {
    return (
        <MapView 
        style={{flex: 1}}        
        region={{          
            latitude: 37.354107,          
            longitude: -121.955238,          
            latitudeDelta: 0.0922,          
            longitudeDelta: 0.0421        
        }}        
        showsUserLocation={true}      
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MapScreen;