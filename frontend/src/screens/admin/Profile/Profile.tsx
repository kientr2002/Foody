import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Button from '../../../components/button/Button'
export default function Profile() {
    return (
        <>
            <View
                style={{
                    flex: 3,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 75,
                            backgroundColor: '#ADAAAA',

                        }}>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                    <Text
                        style={{
                            fontFamily: 'SF-Pro-Rounded_bold',
                            fontSize: 25
                        }}>
                        Username
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'SF-Pro-Rounded_regular',
                            fontSize: 17,
                            color: '#ADAAAA'
                        }}
                    >Email
                    </Text>
                </View>
            </View>

            <View
                style={{
                    flex: 4,
                    paddingLeft: 30,
                    paddingRight: 30
                }}>

                {/* Name */}
                <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> Name
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_regular',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> Bằng
                        </Text>
                    </View>
                </View>

                {/* Name */}
                <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> Day of Birth
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_regular',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> 25/11/2002
                        </Text>
                    </View>
                </View>
            </View >

            <View
                style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingLeft: 30,
                    paddingRight: 30
                }}>
                <View
                    style={{

                    }}>
                    <Button
                        content='CHANGE PASSWORD'
                        type='warning'
                    />
                </View>
                <View>
                    <Button
                        content='LOG OUT'
                        type='error'
                    />
                </View>
            </View>
            {/* <Button
                    content='LOGIN'
                    type='confirm'
                />
                <Input type='name' /> */}

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})