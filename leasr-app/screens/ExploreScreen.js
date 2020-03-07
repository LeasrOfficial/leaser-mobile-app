import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch-native';

const ExploreScreen = props => {
    return (
        <View style={styles.screen}>
            <ReactiveBase
                theme={{
                    backgroundColor: 'black'
                }}
                app="subleasr-test-app"
                credentials="ZmKpHSlRT:defa23b4-dc37-49dd-82fd-204038f44192"

            >
            <View style={styles.header}>
                <View style={styles.calloutView}>
                    <DataSearch 
                        componentId="MapSearch"
                        style={styles.search} 
                    /> 
                </View>
                <View>

                </View>
            </View>
            </ReactiveBase>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    calloutView: {
        backgroundColor: "white",
        borderRadius: 20,
        width: "100%",
    },
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    search: {
    }
});

export default ExploreScreen;