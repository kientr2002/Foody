import React, { Component, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import styles from './styles'

const accounts = [
    {
        email: 'thoaile',
    },
    {
        email: 'cunle',
    }   
]

export default function ForgotPasswordStep1({navigation}: any) {
    const [email, setEmail] = useState<string>('')
    const handleForgotPassword = (username: string) => {
        accounts.forEach(account => {
            if (account.email === email) {
                navigation.navigate('Forgot password step 2')
            } 
        })
    }
    return (
        <>
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
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button content='VERIFY' type='confirm' arrow   onPress={() => handleForgotPassword(email)}/>
            </View>
        </ScrollView>
        </>
    )
}
