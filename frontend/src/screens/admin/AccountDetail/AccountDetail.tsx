import * as React from 'react'
import { View, Text, Image } from 'react-native'
import Button from '../../../components/button/Button'
import Alert from '../../../components/alert/Alert'
import convertDate from '../../../util/convertDate'
import styles from './styles'
import AdminContext, {
    AdminContextInterface,
} from '../../../context/AdminContext'
export default function AccountDetail({ route, navigation }: any) {
    const {
        username,
        name,
        email,
        dob,
        weight,
        height,
        TDEE,
        object,
        status,
    }: any = route?.params
    const [confirm, setConfirm] = React.useState<boolean>(false)
    const [success, setSuccess] = React.useState<boolean>(false)
    const handleBan = async (username: string) => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/banAcc',
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
                setSuccess(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleActive = async (username: string) => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/unlockAcc',
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
                setSuccess(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Alert
                type='remove'
                title='Are you sure want to do this?'
                message=''
                visible={confirm}
                setVisible={setConfirm}
                handleOk={() => [
                    status === 1 ? handleBan(username) : handleActive(username),
                ]}
            />
            <Alert
                type='change_password'
                title='Success'
                message='Success'
                visible={success}
                setVisible={setSuccess}
                handleOk={() => {
                    console.log({ username: username })
                    navigation.navigate('Account list', { username: username })
                }
                }
            />
            <View style={styles.avatar_username_container}>
                <View style={styles.avatar_container}>
                    <View style={styles.avatar}>
                        <Image
                            style={{ flex: 1, borderRadius: 75 }}
                            source={{
                                uri: 'https://www.clipartmax.com/png/middle/171-1716274_animaljake-the-dog-jake-the-dog-adventure-time.png',
                            }}
                            fadeDuration={300}
                        />
                    </View>
                </View>

                <View style={styles.username_container}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>

            <View style={styles.information_container}>
                {/* Name */}
                <View style={styles.line_container}>
                    <View>
                        <Text style={styles.text_1}> Name</Text>
                    </View>
                    <View>
                        <Text style={styles.text_2}>{name}</Text>
                    </View>
                </View>

                {/* Day of Birth */}
                <View style={styles.line_container}>
                    <View>
                        <Text style={styles.text_1}> Day of Birth</Text>
                    </View>
                    <View>
                        <Text style={styles.text_2}>
                            {convertDate(String(dob))}
                        </Text>
                    </View>
                </View>

                {/* Weight */}
                <View style={styles.line_container}>
                    <View>
                        <Text style={styles.text_1}> Weight</Text>
                    </View>
                    <View>
                        <Text style={styles.text_2}>{weight}</Text>
                    </View>
                </View>

                {/* Height */}
                <View style={styles.line_container}>
                    <View>
                        <Text style={styles.text_1}> Height</Text>
                    </View>
                    <View>
                        <Text style={styles.text_2}>{height}</Text>
                    </View>
                </View>

                {/* Current TDEE */}
                <View style={styles.line_container}>
                    <View>
                        <Text style={styles.text_1}> Current TDEE</Text>
                    </View>
                    <View>
                        <Text style={styles.text_2}>{TDEE}</Text>
                    </View>
                </View>

                {/* Current target */}
                <View style={styles.line_container}>
                    <View>
                        <Text style={styles.text_1}> Current target</Text>
                    </View>
                    <View>
                        <Text style={styles.text_2}>{object}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.button_container}>
                <View style={styles.button}>
                    {status === 1 ? (
                        <Button
                            content='BAN'
                            type='error'
                            onPress={() => {
                                setConfirm(true)
                            }}
                        />
                    ) : (
                        <Button
                            content='ACTIVE'
                            type='confirm'
                            onPress={() => {
                                setConfirm(true)
                            }}
                        />
                    )}
                </View>
            </View>
        </>
    )
}
