import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';


import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator.js';
import Profile from '../screens/Profile';
import Messages from '../screens/Messages';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator  screenOptions={{
                            tabBarActiveTintColor: '#f15454',
                            tabBarStyle:{
                                backgroundColor: 'white',
                                borderTopWidth: 1.,
                                borderTopColor: 'lightgrey',
                                height: '7.5%',
                            },
                            tabBarLabelStyle: {
                                fontSize: 14,
                                fontWeight: 'bold'
                            },
                        }}
                        >
            <Tab.Screen name={'Explore'}
                        component={ExploreNavigator}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color}) => {
                                return <Fontisto name="search" size={25} allowFontScaling={true} color={color} />
                            } 
                        }} />
            <Tab.Screen name={'Favorites'}
                        component={Favorites}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color}) => {
                                return <FontAwesome name='heart-o' size={25} color={color} />;
                            } 
            }} />
            <Tab.Screen name={'Messages'}
                        component={Messages}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color}) => {
                                return <Feather name='message-square' size={25} color={color} />
                            } 
            }} />
            <Tab.Screen name={'Profile'}
                        component={Profile}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({color}) => {
                                return <EvilIcons name='user' size={25} color={color} />
                            } 
            }} />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;;