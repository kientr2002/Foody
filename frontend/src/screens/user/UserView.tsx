import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Navbar from '../../components/navbar/Navbar'
import Home from './Home/Home'
import Plan from './Plan/Plan'
import Search from './Search/Search'
import Favorite from './Favorite/Favorite'
import Profile from './Profile/Profile'
import color from '../../styles/color'

const Tab = createBottomTabNavigator()

export default function UserView() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={props => <Navbar {...props} />}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: color.background
                    },
                    headerTintColor: color.primary,
                    headerTitleStyle: {
                        fontFamily: 'SF-Pro-Rounded_heavy',
                        fontSize: 25
                    }
                }}
            >
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Plan' component={Plan} />
                <Tab.Screen name='Search' component={Search} />
                <Tab.Screen name='Favorite' component={Favorite} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}