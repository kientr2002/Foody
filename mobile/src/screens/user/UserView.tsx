import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { UserProvider } from '../../context/UserContext'
import { UserTabParamList } from '../../util/types'

import Navbar from '../../components/navbar/Navbar'
import Favorite from './Favorite/Favorite'
import Home from './Home/Home'
import MyPlan from './MyPlan/MyPlan'
import Profile from './Profile/Profile'
import Search from './Search/Search'

import color from '../../styles/basic'

const Tab = createBottomTabNavigator<UserTabParamList>()
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: color.background,
    },
}

export default function UserView() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                tabBar={(props) => <Navbar {...props} />}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen name='Home page' component={Home} />
                <Tab.Screen name='MyPlan page' component={MyPlan} />
                <Tab.Screen name='Search page' component={Search} />
                <Tab.Screen name='Favorite page' component={Favorite} />
                <Tab.Screen name='Profile page' component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
