import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Navbar from '../../components/navbar/Navbar'
import ManageAccount from './ManageAccount/ManageAccount'
import ManageDish from './ManageDish/ManageDish'
import Profile from './Profile/Profile'
import color from '../../styles/color'
import AddEditDish from './AddEditDish/AddEditDish'
import { StackActions } from 'react-navigation'
import AccountName from './AccountName/AccountName'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export function Home() {
    return (
        <>
            {/* <NavigationContainer> */}
            <Tab.Navigator
                tabBar={props => <Navbar {...props} />}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: color.background
                    },
                    headerTintColor: color.primary,
                    headerTitleStyle: {
                        fontFamily: 'SF-Pro-Rounded_heavy',
                        fontSize: 25
                    }
                }}
            >
                <Tab.Screen name='Manage Account' component={ManageAccount} />
                <Tab.Screen name='Manage Dish' component={ManageDish} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
            {/* </NavigationContainer> */}

        </>
    )
}

export default function AdminView() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen options={{ headerShown: false }} name="ManageDish" component={ManageDish} />
                <Stack.Screen name="AddEditDish" component={AddEditDish}
                    options={{
                        title: 'Add / Edit dish',
                        headerTitleStyle: {
                            fontFamily: 'SF-Pro-Rounded_heavy',
                            fontSize: 25
                        }
                    }} />
                <Stack.Screen name="AccountName" component={AccountName}
                    options={{
                        title: "Account's name",
                        headerTitleStyle: {
                            fontFamily: 'SF-Pro-Rounded_heavy',
                            fontSize: 25
                        }
                    }} />
                <Stack.Screen options={{ headerShown: false }} name="ManageAccount" component={ManageAccount} />
            </Stack.Navigator >

        </NavigationContainer>

    );
}