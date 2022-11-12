import React, { FC, Component, useState } from 'react'
import Select from 'react-select'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'

export default function SignUp({navigation}:any) {
    const [success, setSuccess] = React.useState<boolean>(false)
    const [password, setPassword] = useState<string>('')
    const [confirm_password, setconfirm_password] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [Date, setDate] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')
   return(
    <>
            <Alert
        type='create_plan'
        title='Success'
        message='Sign up success'
        visible={success}
        setVisible={setSuccess}
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
                    <Button content='SIGN UP' type='confirm' arrow />
                </View>
                <View style={styles.logInContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text>Already have account?</Text>
                        <Text 
                            accessibilityRole='button'
                            onPress={() => navigation.navigate('Login')}
                            style={[styles.highlightText, styles.marginLeft_10]}>
                            Log In
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </>
   )
}