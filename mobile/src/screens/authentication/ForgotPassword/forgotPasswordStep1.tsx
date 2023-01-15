import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import { text } from '../../../styles/basic'

import styles from './styles'

const ForgotPasswordStep1 = ({ navigation }: any): JSX.Element => {
    const [email, setEmail] = React.useState<string>('')

    return (
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
                    <Input
                        type='email'
                        focus
                        value={email}
                        setValue={setEmail}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button content='VERIFY' type='confirm' arrow />
            </View>
        </ScrollView>
    )
}

export default ForgotPasswordStep1
