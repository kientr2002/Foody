import React, { Component, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'

const SIGN_IN = 'SIGN_IN'
const GET_STATE = 'GET_STATE'

export default function Login({ navigation }: any) {
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [pwHidden, setpwHidden] = useState(true)
    const [success, setSuccess] = React.useState<boolean>(false)
    const SignUp = () => {
        navigation.navigate('SignUp')
    }
    const Caculate = () => {
        navigation.navigate('Caculate')
    }
    return (
        <>
            <Alert
                type='create_plan'
                title='Success'
                message='Log in success'
                visible={success}
                setVisible={setSuccess}
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
                        />
                    </View>
                </View>

                <View style={styles.focusPassContainer}>
                    <Text style={[styles.highlightText, styles.marginTop_10]}>
                        Focus password?
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button content='LOGIN' type='confirm' arrow />
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
                    <Text style={[styles.highlightText, styles.marginLeft_10]}>
                        Sign up
                    </Text>
                </View>
            </View>
        </>
    )
}
