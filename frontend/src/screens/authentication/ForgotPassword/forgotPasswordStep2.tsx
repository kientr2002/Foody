import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import Alert from '../../../components/alert/Alert'
import styles from './styles'

import { exportStep2 } from './forgotPasswordStep1'
import { exportStep2pw } from './forgotPasswordStep1'


export default function ForgotPasswordStep2({ navigation }: any) {
    const [notification, setNotification] = React.useState<string>('')
    const [checkEmailNull, SetCheckEmailNull] = React.useState<boolean>(false)
    const [warningQuestion, setwarningQuestion] = React.useState<string>('')
    const [warningAnswer, setwarningAnswer] = React.useState<string>('')
    const [user, setUser] = React.useState<boolean>(false)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
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
                handleSignIn(username,question, answer)
            }
        }
    }
    const handleSignIn = async (user: string,question: string, answer: string) => {
        SetCheckEmailNull(false)
        setUsername(exportStep2)
        setPassword(exportStep2pw)
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/getForgotpass',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: user,
                        ques: question,
                        ans: answer
                    }),
                }
            )
            
            if(username === ''){
                setNotification('Press OK and SUBMIT again to continue')
                setSuccess(false)
                SetCheckEmailNull(true)
            }  else {
                const data = await response.json()
                if (data.result === 'ok') {
                    setNotification(password)
                    setSuccess(true)
                } else {
                    setSuccess(false)
                }
            }
        } catch (error) {
            console.error(error)
        }
        setUser(true)
    }
    return (
        <>
            <Alert
                type='change_password'
                title={success ? 'Your password is:' : 'notification'}
                message={success 
                    ? notification 
                    : checkEmailNull 
                        ? notification
                        : 'Answer and Question is incorrect'}
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
