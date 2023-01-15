import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ProfileStackParamList, UserTabParamList } from '../../../util/types'

import HeaderButton from '../../../components/headerButton/HeaderButton'
import color from '../../../styles/basic'
import Calculate from '../../authentication/Calculate/Calculate'
import ChangePassword from '../../authentication/ChangePassword/changePassword'
import MyProfile from './MyProfile'

const Stack = createNativeStackNavigator<ProfileStackParamList>()
type Props = BottomTabScreenProps<UserTabParamList, 'Profile page'>

export default function Profile({ navigation }: Props) {
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
                name='My profile'
                component={MyProfile}
                options={{
                    title: 'Profile',
                    headerRight: () => (
                        <HeaderButton type={1} navigation={navigation} />
                    ),
                }}
            />
            <Stack.Screen
                name='Update status'
                component={Calculate}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Change password'
                component={ChangePassword}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
