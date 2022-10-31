import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Navbar from '../../components/navbar/Navbar'
import ManageAccount from './ManageAccount/ManageAccount'
import ManageDish from './ManageDish/ManageDish'
import Profile from './Profile/Profile'
import color from '../../styles/color'

const Tab = createBottomTabNavigator()

export default function AdminView() {
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
                <Tab.Screen name='Manage Account' component={ManageAccount} />
                <Tab.Screen name='Manage Dish' component={ManageDish} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}