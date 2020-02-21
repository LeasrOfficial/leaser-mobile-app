import MainChat from '../components/chat/MainChat';
import Chat from '../components/chat/Chat';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const MessagingNavigation = createStackNavigator({
    MainChat: {screen: MainChat },
    Chat: { screen: Chat },
},
{
    
});

export default createAppContainer(MessagingNavigation);