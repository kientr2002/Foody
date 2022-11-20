import React, { Component, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import styles from './styles'


export default function Login({ navigation }: any) {
    const { setAdmin, setLogin, setUserId } =
        React.useContext<UserContextInterface>(UserContext)

    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [success, setSuccess] = React.useState<boolean>(false)

    const handleLogin = async (username:string, password:string) => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/getAccount',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        pass: password
                    }),
                }
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setAdmin(data?.role !== 1 )
                setUserId(data?.userId)
                setSuccess(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Alert
                type='create_plan'
                title='Success'
                message='Log in success'
                visible={success}
                setVisible={setSuccess}
                handleOk={() => {
                    setLogin(true)
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
                    </View>
                    <View>
                        <Input
                            type='password'
                            value={password}
                            setValue={setPassword}
                            editable={true}
                        />
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
                        onPress={() => handleLogin(email, password)}
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
