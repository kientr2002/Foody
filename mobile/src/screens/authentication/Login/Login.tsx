import React from 'react'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import { color, text } from '../../../styles/basic'
import styles from './styles'

const Login = ({ navigation }: any): JSX.Element => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const handleLogin = async (username: string, password: string) => {
        // TODO handle login
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../../assets/logo.png')}
                    />
                </View>

                <Text style={[styles.title, text.bold, text.color_black]}>
                    Login
                </Text>

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
                </View>

                <View style={styles.focusPassContainer}>
                    <Text
                        onPress={() =>
                            navigation.navigate('Forgot password step 1')
                        }
                        style={[
                            styles.highlightText,
                            text.heavy,
                            text.size_extraSmall,
                        ]}
                    >
                        Forgot password?
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <ActivityIndicator
                        size='large'
                        color={color.primary}
                        style={styles.loading}
                    />
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
                    <Text
                        accessibilityRole='button'
                        onPress={() => navigation.navigate('Sign Up step 1')}
                        style={[
                            styles.highlightText,
                            text.heavy,
                            text.size_extraSmall,
                            { marginLeft: 5 },
                        ]}
                    >
                        Sign up
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login
