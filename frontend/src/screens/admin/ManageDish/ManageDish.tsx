import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ManageDishStackParamList, AdminTabParamList } from '../../../util/types'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import DishList from './DishList'
import DishDetail from '../DishDetail/DishDetail'

import color from '../../../styles/color'

const Stack = createNativeStackNavigator<ManageDishStackParamList>()
type Props = BottomTabScreenProps<AdminTabParamList, 'Manage Dish'>

export default function ManageDish({ navigation }: Props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: color.primary,
                headerTitleStyle: {
                    fontFamily: 'SF-Pro-Rounded_bold',
                    fontSize: 23,
                },
            }}
        >
            <Stack.Screen
                name='Dish list'
                component={DishList}
                options={{
                    title: 'Dish List',
                }}
            />
            <Stack.Screen
                name='Dish detail'
                component={DishDetail}
                // options={({ route }) => ({ 
                //     title: route.params.name,
                // })}
            />
        </Stack.Navigator>
    )
}