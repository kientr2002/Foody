import { NavigatorScreenParams  } from '@react-navigation/native'

type AdminTabParamList = {
    'Manage Dish': NavigatorScreenParams<ManageDishStackParamList>,
    'Manage Account': NavigatorScreenParams<ManageAccountStackParamList>,
    'Profile': NavigatorScreenParams<AdminProfileStackParamList>
}

type ManageDishStackParamList = {
    'Dish list': undefined,
    'Dish detail': undefined,
    'Edit dish': undefined,
    'Add dish': undefined 
}

type ManageAccountStackParamList = {
    'Account list': undefined,
    'Account detail': undefined
}

type AdminProfileStackParamList = {
    
}

export {
    AdminTabParamList,
    ManageAccountStackParamList,
    ManageDishStackParamList,
    AdminProfileStackParamList
}