import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'

const passwords = [
    {
        password: '1234',
    }  
]
export default function ChangePassword({navigation}:any) {
    const [errorMessage, setErrorMessage] = React.useState<string>('')
    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')
    const [visible, setVisible] = React.useState<boolean>(false)
    const [success, setSuccess] = React.useState<boolean>(false)

    const handleNavigate = (success: Boolean ) => {
        if(success === true)
            navigation.goBack()
        else 
            return null
    }

    const handleChangePassword = (oldPassword: string, newPassword: string, confirmNewPassword: string) => {
        passwords.forEach(passwords => {
            if (passwords.password === oldPassword ) {
                if(newPassword === confirmNewPassword)
                    setSuccess(true);
                else
                    setErrorMessage('Confirm password is incorrect')              
            } else {
                setErrorMessage('Old password is incorrect');
            }
            setVisible(true)
        })
    }

    return (
        <>  
            <Alert
                type='change_password'
                title={success ? 'Change password success' : errorMessage}
                visible={visible}
                setVisible={setVisible}
                handleOk={() => {handleNavigate(success)}}                
            />           
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Change password</Text>
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
                    <Button 
                        content='SUBMIT' 
                        type='confirm' 
                        arrow onPress={() => handleChangePassword(oldPassword, newPassword, confirmNewPassword)}/>
                </View>
            </ScrollView>
        </>
    )
}
