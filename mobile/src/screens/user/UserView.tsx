import {
    BottomTabScreenProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { color } from '../../styles/basic'
import { FoodyLightTheme } from '../../styles/themes'
import {
    FavoriteStackParamList,
    HomeStackParamList,
    MyPlanStackParamList,
    ProfileStackParamList,
    SearchStackParamList,
    UserTabParamList,
} from '../../util/navigator'

import HeaderButton from '../../components/headerButton/HeaderButton'
import Navbar from '../../components/navbar/Navbar'
import Calculate from '../authentication/Calculate/Calculate'
import ChangePassword from '../authentication/ChangePassword/ChangePassword'
import CreatePlan from './CreatePlan/CreatePlan'
import Favorite from './Favorite/Favorite'
import FavoriteList from './FavoriteList/FavoriteList'
import FindFood from './FavoriteList/FindFood'
import FoodDetail from './FoodDetail/FoodDetail'
import Home from './Home/Home'
import MoreFood from './MoreFood/MoreFood'
import MyPlan from './MyPlan/MyPlan'
import Profile from './Profile/Profile'
import Search from './Search/Search'

const Tab = createBottomTabNavigator<UserTabParamList>()
const HomeStack = createNativeStackNavigator<HomeStackParamList>()
const FavoriteStack = createNativeStackNavigator<FavoriteStackParamList>()
const SearchStack = createNativeStackNavigator<SearchStackParamList>()
const PlanStack = createNativeStackNavigator<MyPlanStackParamList>()
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>()

const HomeStackCmp = ({
    navigation,
}: BottomTabScreenProps<UserTabParamList, 'Home page'>): JSX.Element => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerTintColor: color.primary,
                headerTitleStyle: {
                    fontFamily: 'SF-Pro-Rounded_bold',
                    fontSize: 23,
                },
            }}
        >
            <HomeStack.Screen
                name='Food List'
                component={Home}
                options={{
                    title: 'Home',
                    headerRight: () => (
                        <HeaderButton type={1} navigation={navigation} />
                    ),
                }}
            />
            <HomeStack.Screen
                name='Food Detail'
                component={FoodDetail}
                options={({ route }) => ({
                    // title: route.params.name,
                    headerRight: () => <HeaderButton type={2} route={route} />,
                })}
            />
            <HomeStack.Screen name='Create Plan' component={CreatePlan} />
            <HomeStack.Screen name='More Food' component={MoreFood} />
        </HomeStack.Navigator>
    )
}

const MyPlanStackCmp = ({
    navigation,
}: BottomTabScreenProps<UserTabParamList, 'MyPlan page'>): JSX.Element => {
    return (
        <PlanStack.Navigator
            screenOptions={{
                headerTintColor: color.primary,
                headerTitleStyle: {
                    fontFamily: 'SF-Pro-Rounded_bold',
                    fontSize: 23,
                },
            }}
        >
            <PlanStack.Screen
                name='My Plan'
                component={MyPlan}
                options={{
                    headerRight: () => (
                        <HeaderButton type={1} navigation={navigation} />
                    ),
                }}
            />
            <PlanStack.Screen
                name='Food Detail'
                component={FoodDetail}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <PlanStack.Screen name='Create Plan' component={CreatePlan} />
        </PlanStack.Navigator>
    )
}

const SearchStackCmp = ({
    navigation,
}: BottomTabScreenProps<UserTabParamList, 'Search page'>): JSX.Element => {
    return (
        <SearchStack.Navigator
            screenOptions={{
                headerTintColor: color.primary,
                headerTitleStyle: {
                    fontFamily: 'SF-Pro-Rounded_bold',
                    fontSize: 23,
                },
            }}
        >
            <SearchStack.Screen
                name='Search List'
                component={Search}
                options={{
                    title: 'Search',
                    headerRight: () => (
                        <HeaderButton type={1} navigation={navigation} />
                    ),
                }}
            />
            <SearchStack.Screen
                name='Food Detail'
                component={FoodDetail}
                options={({ route }) => ({
                    title: route.params.name,
                    headerRight: () => <HeaderButton type={2} route={route} />,
                })}
            />
            <SearchStack.Screen name='Create Plan' component={CreatePlan} />
        </SearchStack.Navigator>
    )
}

const FavoriteStackCmp = ({
    navigation,
}: BottomTabScreenProps<UserTabParamList, 'Favorite page'>): JSX.Element => {
    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerTintColor: color.primary,
                headerTitleStyle: {
                    fontFamily: 'SF-Pro-Rounded_bold',
                    fontSize: 23,
                },
            }}
        >
            <FavoriteStack.Screen
                name='Favorite'
                component={Favorite}
                options={{
                    headerRight: () => (
                        <HeaderButton type={1} navigation={navigation} />
                    ),
                }}
            />
            <FavoriteStack.Screen
                name='Favorite List'
                component={FavoriteList}
                options={{
                    headerShown: false,
                }}
            />
            <FavoriteStack.Screen
                name='Find food'
                component={FindFood}
                options={{
                    headerShown: false,
                }}
            />
            <FavoriteStack.Screen
                name='Food Detail'
                component={FoodDetail}
                options={({ route }) => ({
                    title: route.params.name,
                    headerRight: () => <HeaderButton type={4} route={route} />,
                })}
            />
            <FavoriteStack.Screen name='Create Plan' component={CreatePlan} />
        </FavoriteStack.Navigator>
    )
}

const ProfileStackCmp = ({
    navigation,
}: BottomTabScreenProps<UserTabParamList, 'Profile page'>): JSX.Element => {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerTintColor: color.primary,
                headerTitleStyle: {
                    fontFamily: 'SF-Pro-Rounded_bold',
                    fontSize: 23,
                },
            }}
        >
            <ProfileStack.Screen
                name='My profile'
                component={Profile}
                options={{
                    title: 'Profile',
                    headerRight: () => (
                        <HeaderButton type={1} navigation={navigation} />
                    ),
                }}
            />
            <ProfileStack.Screen
                name='Update status'
                component={Calculate}
                options={{
                    headerShown: false,
                }}
            />
            <ProfileStack.Screen
                name='Change password'
                component={ChangePassword}
                options={{
                    headerShown: false,
                }}
            />
        </ProfileStack.Navigator>
    )
}

const UserView = (): JSX.Element => {
    return (
        <NavigationContainer theme={FoodyLightTheme}>
            <Tab.Navigator
                tabBar={(props) => <Navbar {...props} />}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen name='Home page' component={HomeStackCmp} />
                <Tab.Screen name='MyPlan page' component={MyPlanStackCmp} />
                <Tab.Screen name='Search page' component={SearchStackCmp} />
                <Tab.Screen name='Favorite page' component={FavoriteStackCmp} />
                <Tab.Screen name='Profile page' component={ProfileStackCmp} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default UserView
