import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import { text } from '../../../styles/basic'
import styles from './styles'

const SignUpStep1 = ({ navigation }: any): JSX.Element => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.title, text.bold, text.color_black]}>
                        Sign up
                    </Text>
                    <Text
                        style={[
                            styles.quote,
                            text.regular,
                            text.size_small,
                            text.color_gray,
                        ]}
                    >
                        Start your new journey with Foody
                    </Text>
                </View>

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
                            type='password'
                            value={password}
                            setValue={setPassword}
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            type='confirm_password'
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        content='NEXT'
                        type='confirm'
                        arrow
                        onPress={() => navigation.navigate('Sign Up step 2')}
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

export default SignUpStep1
