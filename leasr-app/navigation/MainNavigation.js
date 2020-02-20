import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MapScreen from '../screens/MapScreen';
import SavedScreen from '../screens/SavedScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MessagingScreen from '../screens/MessagingScreen';
import AccountScreen from '../screens/AccountScreen';

import { Ionicons, MaterialCommunityIcons, Feather, EvilIcons } from '@expo/vector-icons';

import Colors from '../constants/colors';


const MainTabNavigator = createBottomTabNavigator({
    Maps: {
        screen: MapScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name='map-search-outline' size={20} color={tabInfo.tintColor}/>
            }
        }
    },
    Saved: {
        screen: SavedScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <EvilIcons name='heart' size={30} color={tabInfo.tintColor}/>
            }
        }
    },
    Explore: {
        screen: ExploreScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <EvilIcons name='search' size={30} color={tabInfo.tintColor}/>
            }
        }
    },
    Inbox: {
        screen: MessagingScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <EvilIcons name='envelope' size={30} color={tabInfo.tintColor}/> //Could also do comment for the icon ask about
            }
        }
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <EvilIcons name='user' size={30} color={tabInfo.tintColor}/>
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.primary,
    }
});

export default createAppContainer(MainTabNavigator);