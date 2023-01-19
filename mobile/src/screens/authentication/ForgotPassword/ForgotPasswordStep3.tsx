import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import Button from '../../../components/button/Button'
import { text } from '../../../styles/basic'

import styles from './styles'

const ForgotPasswordStep3 = ({ navigation }: any): JSX.Element => {
    const [email, setEmail] = React.useState<string>('')

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.title, text.bold, text.color_black]}>
                Check your email
            </Text>
            <Text
                style={[
                    styles.step,
                    text.medium,
                    text.size_small,
                    text.color_gray,
                ]}
            >
                We has seen password to your email
            </Text>
            <View style={styles.buttonContainer}>
                <Button content='LOGIN NOW' type='confirm' arrow />
            </View>
            <View style={styles.sendAgain}>
                <Text
                    style={[
                        styles.step,
                        text.medium,
                        text.size_small,
                        text.color_gray,
                    ]}
                >
                    Don't see any email ?
                </Text>
                <Pressable>
                    <Text
                        style={[
                            styles.sendAgainText,
                            text.regular,
                            text.size_small,
                        ]}
                    >
                        Send again
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default ForgotPasswordStep3
