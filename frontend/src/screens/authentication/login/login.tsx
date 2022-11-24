import React, { Component, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import styles from './styles'

let exportEmail = ''

export function exportToChangePassword() {
    return (
        exportEmail
    )
}

const accounts = [
    {
        email: 'thoaile@gmail.com',
        password: '12345678',
        role: 'user',
    },
    {
        email: 'cunle@gmail.com',
        password: '87654321',
        role: 'admin',
    },
]

export default function Login({ navigation }: any) {
    const { setAdmin, setLogin } =
        React.useContext<UserContextInterface>(UserContext)
    const [warningEmail, setwarningEmail] = React.useState<string>('')
    const [warningPassword, setwarningPassword] = React.useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [success, setSuccess] = React.useState<boolean>(false)
    const [visible, setVisible] = React.useState<boolean>(false)
    const verifyInformation = (email: string, password: string) => {
        let regexEmail = new RegExp(/^[\S]+@gmail.com$/)
        // let regexPassword = new RegExp(/.{8,32}/)
        setSuccess(false)
        if(regexEmail.test(email)){
            setwarningEmail('')
            if(password === ''){
                setwarningPassword('Please enter Password')
            } else {
                setwarningPassword('')
                handleSignIn(email, password)
            }
            
        } else {
            if(email === ''){
                setwarningEmail('Please enter Email')
            } else {
                setwarningEmail('Email must be in format ...@gmail.com')
            }
        }
    }
    const handleSignIn = (username: string, password: string) => {
        accounts.forEach((account) => {
            if (account.email === email && account.password == password) {
                exportEmail = email
                setSuccess(true)

                if (account.role === 'admin') setAdmin(true)
            }
            setVisible(true);
        })
    }

    return (
        <>
            <Alert
                type='create_plan'
                title= 'Login'
                message= {success ? 'Log in success' : 'Email or Password is incorrect'}
                visible={visible}
                setVisible={setVisible}
                handleOk={() => {
                    success ? setLogin(true) : setLogin(false)
                }}
            />
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../../assets/logo.png')}
                    />
                </View>

                <Text style={styles.title}>Login</Text>

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
                    <View>
                        <Input
                            type='password'
                            value={password}
                            setValue={setPassword}
                            editable={true}
                        />
                        <Text style={{color:'red'}}>{warningPassword}</Text>
                    </View>
                </View>

                <View style={styles.focusPassContainer}>
                    <Text
                        onPress={() =>
                            navigation.navigate('Forgot password step 1')
                        }
                        style={[styles.highlightText, styles.marginTop_10]}
                    >
                        Forgot password?
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        content='LOGIN'
                        type='confirm'
                        arrow
                        onPress={() => verifyInformation(email, password)}
                    />
                </View>
            </View>
            <View style={styles.signUpContainer}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text>Don't have any account?</Text>
                    <Text
                        accessibilityRole='button'
                        onPress={() => navigation.navigate('Sign Up')}
                        style={[styles.highlightText, styles.marginLeft_10]}
                    >
                        Sign up
                    </Text>
                </View>
            </View>
        </>
    )
}
