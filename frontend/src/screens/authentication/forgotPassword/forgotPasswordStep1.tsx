import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'

const accounts = [
    {
        email: 'thoaile@gmail.com',
    },
    {
        email: 'cunle@gmail.com',
    },
]
let exportEmail = ''
export function exportStep2() {
    return (
        exportEmail
    )
}
export default function ForgotPasswordStep1({ navigation }: any) {
    const [email, setEmail] = useState<string>('')
    const [warningEmail, setwarningEmail] = React.useState<string>('')
    const [success, setSuccess] = React.useState<boolean>(false)
    const [visible, setVisible] = React.useState<boolean>(false)
    const verifyInformation = (email: string) => {
        let regexEmail = new RegExp(/^[\S]+@gmail.com$/)
        // let regexPassword = new RegExp(/.{8,32}/)
        setSuccess(false)
        if(regexEmail.test(email)){
            setwarningEmail('')
            handleForgotPassword(email)           
        } else {
            if(email === ''){
                setwarningEmail('Please enter Email')
            } else {
                setwarningEmail('Email must be in format ...@gmail.com')
            }
        }
    }
    const handleForgotPassword = (username: string) => {
        accounts.forEach((accounts) => {
            if (accounts.email === username) {
                exportEmail = username
                setSuccess(true)
            }
            setVisible(true)
        })
    }
    return (
        <>
            <Alert
                type='change_password'
                title= 'Notification'
                message= {success ? 'Press OK to continue' : 'Your email is not found'}
                visible={visible}
                setVisible={setVisible}
                handleOk={() => {
                    if(success) navigation.navigate('Forgot password step 2')
                }}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.textBackground}>Step 1 of 2</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type='email'
                            focus
                            value={email}
                            setValue={setEmail}
                        />
                        <Text style={{color:'red'}}>{warningEmail}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        content='VERIFY'
                        type='confirm'
                        arrow
                        onPress={() => verifyInformation(email)}
                    />
                </View>
            </ScrollView>
        </>
    )
} 

