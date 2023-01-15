import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { AuthenticationStackParamList } from '../../util/types'

import { color } from '../../styles/basic'
import ChangePassword from './ChangePassword/changePassword'
import ForgotPasswordStep1 from './ForgotPassword/forgotPasswordStep1'
import ForgotPasswordStep2 from './ForgotPassword/forgotPasswordStep2'
import Login from './Login/Login'
import SignUp from './SignUp/signup'

const Stack = createStackNavigator<AuthenticationStackParamList>()
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: color.white,
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
