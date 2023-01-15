import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { color } from '../../styles/basic'
import { AuthenticationStackParamList } from '../../util/types'
import ChangePassword from './ChangePassword/ChangePassword'
import ForgotPasswordStep1 from './ForgotPassword/ForgotPasswordStep1'
import ForgotPasswordStep2 from './ForgotPassword/ForgotPasswordStep2'
import ForgotPasswordStep3 from './ForgotPassword/ForgotPasswordStep3'
import Login from './Login/Login'
import SignUpStep1 from './SignUp/SignUpStep1'
import SignUpStep2 from './SignUp/SignUpStep2'
import UpdateStatus from './UpdateStatus/UpdateStatus'

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
                <Stack.Screen name='Sign Up step 1' component={SignUpStep1} />
                <Stack.Screen name='Sign Up step 2' component={SignUpStep2} />
                <Stack.Screen name='Update status' component={UpdateStatus} />
                <Stack.Screen
                    name='Forgot password step 1'
                    component={ForgotPasswordStep1}
                />
                <Stack.Screen
                    name='Forgot password step 2'
                    component={ForgotPasswordStep2}
                />
                <Stack.Screen
                    name='Forgot password step 3'
                    component={ForgotPasswordStep3}
                />
                <Stack.Screen
                    name='Change password'
                    component={ChangePassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
