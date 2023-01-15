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
    'MyPlan page': undefined
    'Search page': NavigatorScreenParams<SearchStackParamList>
    'Favorite page': NavigatorScreenParams<FavoriteStackParamList>
    'Profile page': undefined
}

type HomeStackParamList = {
    'Food List': undefined
    'Food Detail': Food
    'Create Plan': undefined
}

type MyPlanStackParamList = {
    'MyPlan List': undefined
    'Food Detail': Food
    'Create Plan': undefined
}

type FavoriteStackParamList = {
    'Favorite List': undefined
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
