import * as React from 'react'
import { ActivityIndicator, View, ScrollView, Text } from 'react-native'

import AccountCard from '../../../components/accountcard/AccountCard'
import styles from './styles'
import color from '../../../styles/color'
export default function AccountList({ navigation, route }: any) {
    const [users, setUsers] = React.useState<
        Array<{ id: number; role: number; username: String; status: number }>
    >([])
    const [usersDetail, setUsersDetail] = React.useState<
        Array<{
            username: String
            pass: String
            name: String
            sex: String
            email: String
            ques: String
            ans: String
            role: Number
            weight: Number
            height: Number
            acin: String
            object: String
            TDEE: Number
            dob: String
            status: Number
        }>
    >([])
    const [usersStatus, setUsersStatus] = React.useState<
        Array<{ id: number; role: number; username: String; status: number }>
    >([])
    const [banList, setBanList] = React.useState<Array<{ username: string }>>(
        []
    )
    const [loading, setLoading] = React.useState<boolean>(true)
    const getUsers = async () => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/getListUser'
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setUsers(data.message)
                setUsersStatus(data.message)
                setLoading(false)
                if (usersDetail.length === 0) {
                    {
                        data.message.map((user: any, i: number) =>
                            getUsersDetail(user.username)
                        )
                    }
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getUsersDetail = async (username: String) => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/getDetailAcc',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                    }),
                }
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setUsersDetail((usersDetail) => [
                    ...usersDetail,
                    data.message[0],
                ])
            }
        } catch (error) {
            console.error(error)
        }
    }

    const check = (username: string) => {
        let result = false
        {
            banList.map((element) => {
                if (element.username === username) {
                    result = true
                }
            })
        }
        return result
    }
    React.useEffect(() => {
        getUsers()
    }, [])

    React.useEffect(() => {
        const func = navigation.addListener('focus', () => {
            // if (
            //     route?.params?.username !== undefined &&
            //     !check(route?.params?.username)
            // ) {
            //     setBanList([...banList, { username: route?.params?.username }])
            // }
            console.log(route)
        })
        return func
    }, [navigation])

    const handleOnPress = (obj: any) => {
        navigation.navigate('Account detail', obj)
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>All account</Text>
                {loading ? (
                    <View style={styles.loadingScreen}>
                        <ActivityIndicator size='large' color={color.primary} />
                    </View>
                ) : (
                    <View style={styles.account_list}>
                        <ScrollView
                            contentContainerStyle={{
                                paddingHorizontal: 0,
                            }}
                        >
                            {usersDetail.map((user: any, i: number) => (
                                <View style={styles.card} key={i}>
                                    <AccountCard
                                        username={user.username}
                                        role={
                                            user.role === 1 ? 'User' : 'Admin'
                                        }
                                        status={
                                            banList
                                                ? check(user.username)
                                                    ? 'Banned'
                                                    : user.status === 1
                                                        ? 'Active'
                                                        : 'Banned'
                                                : user.status === 1
                                                    ? 'Active'
                                                    : 'Banned'
                                        }
                                        imgSrc=''
                                        onPress={() => handleOnPress(user)}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>
        </>
    )
}
