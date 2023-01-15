import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Dropdown from '../../../components/dropdown/Dropdown'
import Input from '../../../components/input/Input'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import { text } from '../../../styles/basic'
import styles from './styles'

export default function ForgotPasswordStep2({ navigation }: any) {
    const questions = [
        'What is your favorite movie ?',
        'What is your nickname',
        'What is your first pet ?',
        'How many brother do you have ?',
    ]
    const [selectedQuestion, setSelectedQuestion] = React.useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.title, text.bold, text.color_black]}>
                    Forgot Password
                </Text>
                <Text
                    style={[
                        styles.step,
                        text.bold,
                        text.size_extraSmall,
                        text.color_gray,
                    ]}
                >
                    Step 1 of 2
                </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Dropdown
                            label='Activity'
                            data={questions}
                            onSelect={(question) => {
                                setSelectedQuestion(question)
                            }}
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
                    <Button content='SUBMIT' type='confirm' arrow />
                </View>
            </ScrollView>
        </>
    )
}
