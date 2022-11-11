import { NavigatorScreenParams } from '@react-navigation/native'

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

interface Food {
    id: number
    name: string
    body: {
        description: string
        calories: number
        protein: number
        fat: number
        carb: number
    }
    recipe: [
        {
            step: number
            body: string
        }
    ]
    imgSrc: string
    rate: number
}

export {
    Food,
    UserTabParamList,
    HomeStackParamList,
    MyPlanStackParamList,
    FavoriteStackParamList,
    SearchStackParamList,
    ProfileStackParamList,
}
