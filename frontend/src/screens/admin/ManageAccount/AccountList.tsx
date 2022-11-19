import * as React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'

import AccountCard from '../../../components/accountcard/AccountCard'

import styles from './styles'

export default function AccountList() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>All account</Text>
                <View style={styles.account_list}>
                    <ScrollView
                        contentContainerStyle={{
                            paddingHorizontal: 0,
                        }}
                    >
                        <View style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                        <View style={styles.card}>
                            <AccountCard
                                username='levanbang'
                                role='Admin'
                                status='active'
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.pads}></View>
            </View>
        </>
    )
}
