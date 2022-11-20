import * as React from 'react'
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import color from '../../../styles/color'
import { User } from '../../../util/interface'

export default function MyProfile({ navigation }: any) {
    const { setLogin, setAdmin, setUserId, userId } =
        React.useContext<UserContextInterface>(UserContext)
    const [logOut, setLogOut] = React.useState<boolean>(false)
    const [user, setUser] = React.useState<User | null>(null)
    const [dateOfBirth, setDateOfBirth] = React.useState<Date>()

    // Get user profile
    const handleGetInfo = async () => {
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
                        username: 'client4'
                    }),
                }
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setUser(data.message[0])
            }
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        handleGetInfo()
    }, [userId])

    React.useEffect(() => {
        if (user?.dob) {
            let date = new Date(user.dob)
            setDateOfBirth(date)
        }
    }, [user])

    return (
        <>
            <Alert
                type='logout'
                title='Log out'
                message='Are you sure want to logout?'
                visible={logOut}
                setVisible={setLogOut}
                handleOk={() => {
                    setLogin(false)
                    setAdmin(false)
                    setUserId(null)
                }}
            />
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Image
                        source={{
                            uri: 'https://www.clipartmax.com/png/middle/171-1716274_animaljake-the-dog-jake-the-dog-adventure-time.png',
                        }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={[styles.text_bold, styles.textSize_23]}>
                            {user?.username}
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                                styles.marginBottom,
                            ]}
                        >
                            {user?.email}
                        </Text>
                        <Button
                            type='warning'
                            content='UPDATE TDEE'
                            onPress={() => {
                                navigation.navigate('Update status')
                            }}
                        />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Name:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            {user?.name}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Day of Birth:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            {`${dateOfBirth?.getDate()}/${dateOfBirth?.getMonth()}/${dateOfBirth?.getFullYear()}`}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Weight:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            {user?.weight} kg
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Height:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            {user?.height} m
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Current TDEE:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            {user?.TDEE}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Current target:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            {user?.object}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View
                        style={{
                            marginRight: 10,
                        }}
                    >
                        <Button
                            type='confirm'
                            content='CHANGE PASSWORD'
                            onPress={() => {
                                navigation.navigate('Change password')
                            }}
                        />
                    </View>
                    <View>
                        <Button
                            type='error'
                            content='LOG OUT'
                            onPress={() => {
                                setLogOut(true)
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 30,
        marginBottom: 40,
        paddingHorizontal: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    text_bold: {
        fontFamily: 'SF-Pro-Rounded_bold',
        paddingRight: 10,
    },
    text_regular: {
        fontFamily: 'SF-Pro-Rounded_medium',
    },
    textSize_23: {
        fontSize: 23,
    },
    textSize_18: {
        fontSize: 18,
    },
    color_1: {
        color: color.textBackground,
    },
    marginBottom: {
        marginBottom: 10,
    },

    infoContainer: {
        paddingHorizontal: 20,
    },
    textContainer: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        paddingRight: 20,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})
