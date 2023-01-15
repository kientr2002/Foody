import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import HeaderButton from '../../../components/headerButton/HeaderButton'
import color from '../../../styles/basic'
import { FavoriteStackParamList, UserTabParamList } from '../../../util/types'
import CreatePlan from '../CreatePlan/CreatePlan'
import FoodDetail from '../FoodDetail/FoodDetail'
import FavoriteList from './FavoriteList'

const Stack = createNativeStackNavigator<FavoriteStackParamList>()
type Props = BottomTabScreenProps<UserTabParamList, 'Favorite page'>

export default function Favorite({ navigation }: Props) {
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
                name='Favorite List'
                component={FavoriteList}
                options={{
                    title: 'Favorite',
                    headerRight: () => (
                        <HeaderButton type={1} navigation={navigation} />
                    ),
                }}
            />
            <Stack.Screen
                name='Food Detail'
                component={FoodDetail}
                options={({ route }) => ({
                    title: route.params.name,
                    headerRight: () => <HeaderButton type={4} route={route} />,
                })}
            />
            <Stack.Screen name='Create Plan' component={CreatePlan} />
        </Stack.Navigator>
    )
}
