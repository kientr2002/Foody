import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import { text } from '../../../styles/basic'
import styles from './styles'

export default function ChangePassword({ navigation }: any) {
    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.title, text.bold, text.color_black]}>
                Change password
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <Input
                        type='old_password'
                        value={oldPassword}
                        setValue={setOldPassword}
                    />
                </View>
                <View style={styles.input}>
                    <Input
                        type='new_password'
                        value={newPassword}
                        setValue={setNewPassword}
                    />
                </View>
                <View style={styles.input}>
                    <Input
                        type='confirm_new_password'
                        value={confirmNewPassword}
                        setValue={setConfirmNewPassword}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button content='SUBMIT' type='confirm' arrow />
            </View>
        </ScrollView>
    )
}
