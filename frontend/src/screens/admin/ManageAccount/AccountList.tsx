import * as React from 'react'
import { ActivityIndicator, View, ScrollView, Text } from 'react-native'

import AccountCard from '../../../components/accountcard/AccountCard'
import styles from './styles'
import { User } from '../../../util/interface'
import color from '../../../styles/color'
import Button from '../../../components/button/Button'
export default function AccountList({ navigation }: any) {
    const [users, setUsers] = React.useState<
        Array<{ id: number; role: number; username: String }>
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
        }>
    >([])
    const [loading, setLoading] = React.useState<boolean>(true)

    const getUsers = async () => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/getListUser'
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setUsers(data.message)
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

    React.useEffect(() => {
        getUsers()
    }, [])

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
                                            user.status === 1
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
