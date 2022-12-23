import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import Alert from '../../../components/alert/Alert'
import styles from './styles'

import { exportStep2 } from './forgotPasswordStep1'

const accounts = [
    {
        email: 'thoaile@gmail.com',
        password: '12345678',
        question: 'What your name',
        answer: 'Thoai',
    },
    {
        email: 'cunle@gmail.com',
        password: '87654321',
        question: 'School name',
        answer: 'HCMUT',
    },
]

export default function ForgotPasswordStep2({ navigation }: any) {
    const [notification, setNotification] = React.useState<string>('')
    const [checkEmailNull, SetCheckEmailNull] = React.useState<boolean>(false)
    const [warningQuestion, setwarningQuestion] = React.useState<string>('')
    const [warningAnswer, setwarningAnswer] = React.useState<string>('')
    const [user, setUser] = React.useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')
    const [success, setSuccess] = React.useState<boolean>(false)
    const LogIn = (success: Boolean) => {
        if (success === true) {
            navigation.navigate('Login')
        }
    }
    const verifyInformation = (question: string, answer: string) => {
        setSuccess(false)
        if (question === '') {
            setwarningQuestion('Please enter Question')
        } else {
            setwarningQuestion('')
            if (answer === '') {
                setwarningAnswer('Please enter Answer')
            } else {
                setwarningAnswer('')

                handleSignIn(question, answer)
            }
        }
    }
    const handleSignIn = (question: string, answer: string) => {
        setEmail(exportStep2)
        SetCheckEmailNull(false)
        accounts.forEach((accounts) => {
            if (
                accounts.question === question &&
                accounts.answer === answer &&
                accounts.email === email
            ) {
                setSuccess(true)
                setNotification(accounts.password)
            }
            if (email === '') {
                setNotification('Press OK and SUBMIT again to continue')
                SetCheckEmailNull(true)
            }
        })
        setUser(true)
    }
    return (
        <>
            <Alert
                type='change_password'
                title={success ? 'Your password is:' : 'notification'}
                message={
                    success
                        ? notification
                        : checkEmailNull
                        ? notification
                        : 'Answer and Question is incorrect'
                }
                visible={user}
                setVisible={setUser}
                handleOk={() => {
                    if (success) LogIn(true)
                }}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.textBackground}>Step 2 of 2</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type='question'
                            value={question}
                            setValue={setQuestion}
                        />
                        <Text style={styles.warningText}>
                            {warningQuestion}
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <Input
                            type='answer'
                            value={answer}
                            setValue={setAnswer}
                        />

                        <Text style={styles.warningText}>{warningAnswer}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        content='SUBMIT'
                        type='confirm'
                        arrow
                        onPress={() => verifyInformation(question, answer)}
                    />
                </View>
            </ScrollView>
        </>
    )
}
