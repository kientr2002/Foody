import * as React from 'react'
import { View, ScrollView, Text } from 'react-native'

import AccountCard from '../../../components/accountcard/AccountCard'
import styles from './styles'

export default function AccountList({ navigation }: any) {
    const [accounts, setAccounts] = React.useState<Array<any>>([])

    const handleOnPress = (obj: any) => {
        navigation.navigate('Account detail', obj)
    }

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
                        {accounts.map((account: any, i: number) => (
                            <View style={styles.card} key={i}>
                                <AccountCard
                                    username={account.username}
                                    role={account.role}
                                    status={account.status}
                                    imgSrc={account.imgSrc}
                                    onPress={() => handleOnPress(account)}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.pads}></View>
            </View>
        </>
    )
}
