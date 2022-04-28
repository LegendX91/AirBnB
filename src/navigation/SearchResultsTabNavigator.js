import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/searchResults'

const SearchResultsTabNav = (props) => {
    
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#f15454',
                tabBarIndicatorStyle: {
                    backgroundColor: '#f15454',
                }
            }}>
            <Tab.Screen 
                name={'list'}
                component={SearchResults}
            />
            <Tab.Screen 
                name={'map'}
                component={SearchResults}
            />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNav;