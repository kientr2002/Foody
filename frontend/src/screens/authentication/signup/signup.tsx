import React, { FC, Component, useState } from 'react'
import Select from 'react-select'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'

export default function SignUp({ navigation }: any) {
    const [success, setSuccess] = React.useState<boolean>(false)
    const [visible, setVisible] = React.useState<boolean>(false)
    const [errorMessage, setErrorMessage] = React.useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm_password, setconfirm_password] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [Date, setDate] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')
    
    const handleNavigate = (success: Boolean) => {
        if (success === true) navigation.goBack()
        else return null
    }
    const handleSignUp = (
    ) => {
        if(password === ''||
        confirm_password === '' ||
        name === '' ||
        Date === '' ||
        email === '' ||
        question === '' ||
        answer === ''){
           setErrorMessage('Please enter all information')
        } else {
            if(password !== confirm_password){
                setErrorMessage('Confirm password is incorrect')
            } else {
                setSuccess(true)
            }
            
        }
        setVisible(true)
    }
    return (
        <>
            <Alert
                type='change_password'
                title={success ? 'Change password success' : errorMessage}
                visible={visible}
                setVisible={setVisible}
                handleOk={() => {
                    handleNavigate(success)
                }}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Sign up</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.input}>
                            <Input
                                type='email'
                                value={email}
                                setValue={setEmail}
                            />
                        </View>
                        <View style={styles.input}>
                            <Input
                                type='name'
                                value={name}
                                setValue={setName}
                            />
                        </View>
                        <View style={styles.input}>
                            <Input
                                type='calendar'
                                value={Date}
                                setValue={setDate}
                            />
                        </View>
                        <View style={styles.input}>
                            <Input
                                type='password'
                                value={password}
                                setValue={setPassword}
                            />
                        </View>
                        <View style={styles.input}>
                            <Input
                                type='confirm_password'
                                value={confirm_password}
                                setValue={setconfirm_password}
                            />
                        </View>
                        <View style={styles.input}>
                            <Input
                                type='question'
                                value={question}
                                setValue={setQuestion}
                            />
                        </View>
                        <View style={styles.input}>
                            <Input
                                type='answer'
                                value={answer}
                                setValue={setAnswer}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            content='SIGN UP'
                            type='confirm'
                            arrow
                            onPress={() => handleSignUp()}
                        />
                    </View>
                    <View style={styles.logInContainer}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text>Already have account?</Text>
                            <Text
                                accessibilityRole='button'
                                onPress={() => navigation.navigate('Login')}
                                style={[
                                    styles.highlightText,
                                    styles.marginLeft_10,
                                ]}
                            >
                                Log In
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
