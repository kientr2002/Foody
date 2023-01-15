import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import Button from '../../../components/button/Button'
import Dropdown from '../../../components/dropdown/Dropdown'
import Input from '../../../components/input/Input'
import { color, text } from '../../../styles/basic'
import styles from './styles'

const SignUpStep2 = ({ navigation }: any): JSX.Element => {
    const questions = [
        'What is your favorite movie ?',
        'What is your nickname',
        'What is your first pet ?',
        'How many brother do you have ?',
    ]
    const [selectedQuestion, setSelectedQuestion] = React.useState<string>('')
    const [answer, setAnswer] = React.useState<string>('')

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.title, text.bold, text.color_black]}>
                        Save your day
                    </Text>
                    <Text
                        style={[
                            styles.quote,
                            text.regular,
                            text.size_small,
                            text.color_gray,
                        ]}
                    >
                        Secret question to enhance your account protection
                    </Text>
                </View>

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

                <View style={[styles.buttonContainer, { marginTop: 50 }]}>
                    <ActivityIndicator
                        size='large'
                        color={color.primary}
                        style={styles.loading}
                    />
                    <Button
                        content='SIGN UP'
                        type='confirm'
                        arrow
                        onPress={() => navigation.navigate('Update status')}
                    />
                </View>
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
                            text.heavy,
                            text.size_extraSmall,
                            { marginLeft: 5 },
                        ]}
                    >
                        Log In
                    </Text>
                </View>
            </View>
        </>
    )
}

export default SignUpStep2
