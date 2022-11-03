import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import { HomeStackParamList, UserTabParamList } from '../../../util/types'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import FoodList from '../FoodList/FoodList'
import FoodDetail from '../FoodDetail/FoodDetail'
import HeaderButton from '../../../components/headerButton/HeaderButton'
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
                options={{
                    headerRight: () => (<HeaderButton type={1} />)
                }}
            />
            <Stack.Screen 
                name='Food Detail' 
                component={FoodDetail} 
                options={({ route }) => ({ 
                    // title: route.params.name,
                    headerRight: () => (<HeaderButton type={2} />)
                })}
            />
        </Stack.Navigator>
    )
}
