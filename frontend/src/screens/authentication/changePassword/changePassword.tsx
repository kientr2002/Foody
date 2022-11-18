import React, { Component, useState } from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import styles from './styles'
const passwords = [
    {
        password: '1234',
    }  
]
export default function ChangePassword({navigation}:any) {
    const LogIn = (success: Boolean ) => {
        if(success === true){
            navigation.navigate('Login');
        }
    }
    const handleSignIn = (oldPassword: string, newPassword: string, confirmNewPassword: string) => {
        passwords.forEach(passwords => {
            if (passwords.password === oldPassword ) {
                if(newPassword === confirmNewPassword){
                    setSuccess(true);
                } else {
                    setSameNewPassword(true);
                }               
            } else {
                setSameOldPassword(true);
            }
        })
    }
  const [sameOldPassword, setSameOldPassword] = React.useState<boolean>(false)
  const [sameNewPassword, setSameNewPassword] = React.useState<boolean>(false)
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmNewPassword, setconfirmNewPassword] = useState<string>('')
  const [success, setSuccess] = React.useState<boolean>(false)
    return (
        <>  
                <Alert
                type='change_password'
                notice='Change password success'
                visible={success}
                setVisible={setSuccess}
                handleOk={() => {LogIn(true)}}                
                />
                 <Alert
                type='change_password'
                notice='Old password is incorrect'
                visible={sameOldPassword}
                setVisible={setSameOldPassword}                
                />
                <Alert
                type='change_password'
                notice='Confirm new password is incorrect'
                visible={sameNewPassword}
                setVisible={setSameNewPassword}                
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
                        setValue={setconfirmNewPassword}
                    />
                </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button content='SUBMIT' type='confirm' arrow onPress={() => handleSignIn(oldPassword, newPassword, confirmNewPassword)}/>
                </View>
            </ScrollView>
        </>
    )
}
