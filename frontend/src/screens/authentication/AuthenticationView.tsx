import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthenticationStackParamList } from '../../util/types'
import { createStackNavigator } from '@react-navigation/stack'

import color from '../../styles/color'
import Login from './login/Login'
import SignUp from './signup/SignUp'
import ForgotPasswordStep1 from './forgotPassword/ForgotPasswordStep1'
import ForgotPasswordStep2 from './forgotPassword/ForgotPasswordStep2'
import ChangePassword from './changePassword/ChangePassword'

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
                <Stack.Screen
                    name='Forgot password step 1'
                    component={ForgotPasswordStep1}
                />
                <Stack.Screen
                    name='Forgot password step 2'
                    component={ForgotPasswordStep2}
                />
                <Stack.Screen
                    name='Change password'
                    component={ChangePassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
