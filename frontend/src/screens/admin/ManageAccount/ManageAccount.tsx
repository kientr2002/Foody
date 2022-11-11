import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '../../../components/card/Card'
import AccountCard from '../../../components/accountcard/AccountCard'
import styles from './styles'
export default function ManageAccount({ navigation }: { navigation: any }) {
    return (
        <>
            <View
                style={styles.container}>
                <Text
                    style={styles.title}>All account
                </Text>
                <View
                    style={styles.account_list}>
                    <ScrollView
                        contentContainerStyle={{
                            paddingHorizontal: 0
                        }}>
                        <View
                            style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                                onPress={() => navigation.navigate('AccountName')}
                            />
                        </View>
                        <View
                            style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                        <View
                            style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={styles.pads}>

                </View>
            </View>
        </>
    )
}
