import React, { FC, Component, useState } from 'react'
import Select from 'react-select'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'

export default function SignUp() {
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
                            focus
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
                        <Text style={[styles.highlightText, styles.marginLeft_10]}>
                            Log In
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </>
   )
}




//Old Code 
            {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => Login()}>
                    <Image
                        source={require('../../../../assets/images-authentication/Vector-Left.png')}
                        style={{ marginTop: '12%' }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.Body}>
                <View style={styles.HeadBody}>
                    <Text style={styles.Title}>Sign up</Text>
                </View>
                <View style={styles.space}></View>
                <View style={styles.Entity}>
                    <Input type='email' focus={false} value='email' />
                </View>
                <View style={styles.space}></View>
                <View style={styles.Entity}>
                    <Input type='name' focus={false} value='name' />
                </View>
                <View style={styles.space}></View>
                <View style={styles.Entity}>
                    <Input type='calendar' focus={false} value='calendar' />
                </View>
                <View style={styles.space}></View>
                <View style={styles.Entity}>
                    <Input type='password' focus={false} value='password' />
                </View>
                <View style={styles.space}></View>
                <View style={styles.Entity}>
                    <Input
                        type='confirm_password'
                        focus={false}
                        value='confirm_password'
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.Entity}>
                    <Input type='question' focus={false} value='question' />
                </View>
                <View style={styles.space}></View>
                <View style={styles.Entity}>
                    <Input type='answer' focus={false} value='answer' />
                </View>
                <View style={styles.litleSpace}></View>
                <View style={styles.Button}>
                    <Button content='SIGN UP' type='confirm' arrow={true} />
                </View>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Footer}>
                <Text style={styles.textFooter}>Already have account? </Text>
                <TouchableOpacity onPress={() => Login()}>
                    <Text style={styles.clicktextFooter}>Login</Text>
                </TouchableOpacity>
            </View> */}