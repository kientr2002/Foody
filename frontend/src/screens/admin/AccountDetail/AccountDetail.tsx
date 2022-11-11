import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '../../../components/card/Card'
import AccountCard from '../../../components/accountcard/AccountCard'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'

export default function AccountDetail() {
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
                    flex: 5,
                    paddingLeft: 30,
                    paddingRight: 30
                }}>

                {/* Name */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingBottom: 10
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

                {/* Day of Birth */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingBottom: 10
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

                {/* Weight */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingBottom: 10
                    }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> Weight
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

                {/* Height */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingBottom: 10
                    }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> Height
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

                {/* Current TDEE */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingBottom: 10
                    }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> Current TDEE
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

                {/* Current target */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 10
                    }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000',
                                marginRight: 20,
                            }}> Current target
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
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingLeft: 30,
                    paddingRight: 50,
                }}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Button
                        content='BAN'
                        type='error'
                    />
                </View>
            </View>
        </>
    )
}