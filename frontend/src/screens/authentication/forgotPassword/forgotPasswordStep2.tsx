import React, {  useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import Alert from '../../../components/alert/Alert'
import styles from './styles'
const questions = [
    {
        question: 'What your name',
        answer: 'Kien'
    }
]
export default function ForgotPasswordStep2({navigation}: any) {
 
    const [user, setUser] = React.useState<boolean>(false)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')
    const LogIn = (success: Boolean ) => {
        if(success === true){
            navigation.navigate('Login');
        }
    }
    const handleSignIn = (question: string, answer: string) => {
        questions.forEach(questions => {
            if (questions.question === question) {
                if (questions.answer === answer)
                    setUser(true)
                } 
        })
    }
    return (
        <>
            <Alert
                type='change_password'
                title='Your password is:'
                message='1234'
                visible={user}
                setVisible={setUser}
                handleOk={() => {LogIn(true)}}
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
                    <Button content='SUBMIT' type='confirm' arrow onPress={() => handleSignIn(question,answer)} />
                </View>
            </ScrollView>
        </>
    )
}
