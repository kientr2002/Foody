import * as React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import Alert from '../../../components/alert/Alert'

import Button from '../../../components/button/Button'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import styles from './styles'

export default function Profile() {
    const {setLogin, setAdmin} = React.useContext<UserContextInterface>(UserContext)
    const [logOut, setLogOut] = React.useState<boolean>(false)
    
    return (
        <>
            <Alert 
                type='logout'
                title='Log out'
                message='Are you sure want to logout?'
                visible={logOut}
                setVisible={setLogOut}
                handleOk={() => {
                    setLogin(false)
                    setAdmin(false)
                }}
            />
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Image
                        source={{
                            uri: 'https://www.clipartmax.com/png/middle/171-1716274_animaljake-the-dog-jake-the-dog-adventure-time.png',
                        }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={[styles.text_bold, styles.textSize_23]}>
                            Username
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                                styles.marginBottom,
                            ]}
                        >
                            Email
                        </Text>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Name:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            Le Nguyen Huyen Thoai
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Day of Birth:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            09/10/2002
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Email:
                        </Text> 
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            lenguyenhuyenthoai@gmail.com
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text_bold, styles.textSize_18]}>
                            Contact number:
                        </Text>
                        <Text
                            style={[
                                styles.text_regular,
                                styles.textSize_18,
                                styles.color_1,
                            ]}
                        >
                            0355770987
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View
                        style={{
                            marginRight: 10,
                        }}
                    >
                        <Button type='confirm' content='CHANGE PASSWORD' />
                    </View>
                    <View>
                        <Button 
                            type='error' 
                            content='LOG OUT' 
                            onPress={() => {
                                setLogOut(true)
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}