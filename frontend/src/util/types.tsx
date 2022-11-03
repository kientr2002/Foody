import { NavigatorScreenParams } from "@react-navigation/native"

type UserTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>,
    Plan: undefined,
    Search: undefined,
    Favorite: undefined,
    Profile: undefined
}

type HomeStackParamList = {
    'Food List': undefined,
    'Food Detail': {
        cardStyle: number,
        name: string,
        body: {
            description: string,
            calories: number,
            protein: number
            fat: number,
            carb: number
        }
        recipe: [
            {
                step: number,
                body: string,
            }
        ],
        imgSrc: string
        rate: number
    },
    'Create Plan': undefined
}

// type AdminRootStackParamList = {
//     AccountManager: undefined,
//     FoodManager: undefined,
//     Profile: undefined
// }

// type AuthenticateRootStackParamList = {
//     Login: undefined,
//     SignUp: undefined,
//     ForgotPassword: undefined
// }

export { UserTabParamList, HomeStackParamList}