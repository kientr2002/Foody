import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthenticationStackParamList } from '../../util/types'
import { createStackNavigator } from '@react-navigation/stack'

import color from '../../styles/color'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

const Stack = createStackNavigator<AuthenticationStackParamList>()
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: color.background,
    },
}

export default function AuthenticationView() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Sign Up' component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}