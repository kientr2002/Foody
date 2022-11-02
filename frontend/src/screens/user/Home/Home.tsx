import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import { HomeStackParamList, UserTabParamList } from '../../../util/types'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import FoodList from '../FoodList/FoodList'
import FoodDetail from '../Food detail/FoodDetail'
import color from '../../../styles/color'

const Stack = createNativeStackNavigator<HomeStackParamList>()
type Props = BottomTabScreenProps<UserTabParamList, 'Home'>

export default function Home({ route, navigation }:Props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: color.primary,
                headerTitleStyle: {
                    fontFamily: 'SF-Pro-Rounded_bold',
                    fontSize: 23
                }
            }}
        >
            <Stack.Screen
                name='Food List' 
                component={FoodList}
            />
            <Stack.Screen 
                name='Food Detail' 
                component={FoodDetail} 
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})