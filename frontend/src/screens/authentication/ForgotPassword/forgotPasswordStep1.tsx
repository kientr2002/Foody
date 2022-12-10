import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'

import styles from './styles'

 let exportEmail : string
export function exportStep2() {
    return exportEmail
}
export default function ForgotPasswordStep1({ navigation }: any) {
    const [username, setUsername] = useState<string>('')
    const [warningUsername, setwarningUsername] = React.useState<string>('')
    const [success, setSuccess] = React.useState<boolean>(false)
    const [visible, setVisible] = React.useState<boolean>(false)
    const verifyInformation = (email: string) => {
        let regexEmail = new RegExp(/^[\S]+@gmail.com$/)
        // let regexPassword = new RegExp(/.{8,32}/)
        setSuccess(false)
        if (email === '') {
            setwarningUsername('Please enter Username')
        } else {
            setwarningUsername('')
            handleForgotPassword(username)
        }

    }
    const handleForgotPassword = async (username: string) => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/getPassword',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username
                    }),
                }
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setSuccess(true)
            } else {
                setSuccess(false)
            }
            setVisible(true)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <Alert
                type='change_password'
                title='Notification'
                message={
                    success ? 'Press OK to continue' : 'Username is not found'
                }
                visible={visible}
                setVisible={setVisible}
                handleOk={() => {
                    if (success) navigation.navigate('Forgot password step 2')
                }}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.textBackground}>Step 1 of 2</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type='user'
                            focus
                            value={username}
                            setValue={setUsername}
                        />
                        <Text style={styles.warningText}>{warningUsername}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        content='VERIFY'
                        type='confirm'
                        arrow
                        onPress={() => verifyInformation(username)}
                    />
                </View>
            </ScrollView>
        </>
    )
}
