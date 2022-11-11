import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'

import Navbar from './src/components/navbar/Navbar'
import Card from './src/components/card/Card'
import Button from './src/components/button/Button'
import Input from './src/components/input/Input'
import AccountCard from './src/components/accountcard/AccountCard'
import UserView from './src/screens/user/UserView'
import AdminView from './src/screens/admin/AdminView'
import DishName from './src/screens/admin/DishDetail/DishDetail'
const Stack = createNativeStackNavigator()

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
        <AdminView />
    )
}


