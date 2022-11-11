import * as React from 'react'
import { View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'

import Button from './src/components/button/Button';
import styles from './src/components/card/styles';
import color from "./src/styles/color"

import Login from './src/screens/authentication/login/login'
import SignUp from './src/screens/authentication/signup/signup'
import Caculate from './src/screens/authentication/caculate/caculate'
import MainAuthentication from './src/screens/authentication/authenticationView'


export default function App() {
    //load font
    const [fontLoaded] = useFonts({
        'SF-Pro-Rounded_heavy': require('./assets/font/SF-Pro-Rounded-Heavy.otf'),
        'SF-Pro-Rounded_bold': require('./assets/font/SF-Pro-Rounded-Bold.otf'),
        'SF-Pro-Rounded_semibold': require('./assets/font/SF-Pro-Rounded-Semibold.otf'),
        'SF-Pro-Rounded_medium': require('./assets/font/SF-Pro-Rounded-Medium.otf'),
        'SF-Pro-Rounded_regular': require('./assets/font/SF-Pro-Rounded-Regular.otf'),
    })
    
    if (!fontLoaded)
        return null 
        
    return (
        <MainAuthentication/>
        
    )
}
