import { NavigatorScreenParams } from '@react-navigation/native'
import { Food } from './interface'

type AuthenticationStackParamList = {
    Login: undefined
    'Sign Up step 1': undefined
    'Sign Up step 2': undefined
    'Update status': undefined
    'Forgot password step 1': undefined
    'Forgot password step 2': undefined
    'Forgot password step 3': undefined
    'Change password': undefined
}

type UserTabParamList = {
    'Home page': NavigatorScreenParams<HomeStackParamList>
    'MyPlan page': NavigatorScreenParams<MyPlanStackParamList>
    'Search page': NavigatorScreenParams<SearchStackParamList>
    'Favorite page': NavigatorScreenParams<FavoriteStackParamList>
    'Profile page': NavigatorScreenParams<ProfileStackParamList>
}

type HomeStackParamList = {
    'Food List': undefined
    'Food Detail': Food
    'Create Plan': undefined
    'More Food': undefined
}

type MyPlanStackParamList = {
    'My Plan': undefined
    'Food Detail': Food
    'Create Plan': undefined
}

type FavoriteStackParamList = {
    Favorite: undefined
    'Favorite List': undefined
    'Find food': undefined
    'Food Detail': Food
    'Create Plan': undefined
}

type SearchStackParamList = {
    'Search List': undefined
    'Food Detail': Food
    'Create Plan': undefined
}

type ProfileStackParamList = {
    'My profile': undefined
    'Update status': undefined
    'Change password': undefined
}

export {
    AuthenticationStackParamList,
    UserTabParamList,
    HomeStackParamList,
    MyPlanStackParamList,
    FavoriteStackParamList,
    SearchStackParamList,
    ProfileStackParamList,
}
