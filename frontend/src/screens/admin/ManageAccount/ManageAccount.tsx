import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '../../../components/card/Card'
import AccountCard from '../../../components/accountcard/AccountCard'
export default function ManageAccount() {
    return (
        <>
            <View
                style={{
                    flex: 1
                }}>
                <Text
                    style={{
                        fontFamily: 'SF-Pro-Rounded_regular',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        fontSize: 17,
                        paddingLeft: '5%',
                        marginTop: 80,
                        marginBottom: 20
                    }}>All account
                </Text>
                <View
                    style={{
                        flex: 10,
                        paddingLeft: '5%'
                    }}>
                    <ScrollView>
                        <View
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                            <AccountCard
                                username='levanbang'
                                role='admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                            <AccountCard
                                username='levanbang'
                                role='admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                            <AccountCard
                                username='levanbang'
                                role='admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                            <AccountCard
                                username='levanbang'
                                role='admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                            <AccountCard
                                username='levanbang'
                                role='admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                            <AccountCard
                                username='levanbang'
                                role='admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10
                            }}>
                            <AccountCard
                                username='levanbang'
                                role='admin'
                                status='active'
                            />
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex: 1
                    }}>

                </View>
            </View>
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