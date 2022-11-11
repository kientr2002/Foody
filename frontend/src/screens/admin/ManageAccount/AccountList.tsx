import * as React from "react"
import { View, ScrollView, Text, StyleSheet } from "react-native"
import AccountCard from "../../../components/accountcard/AccountCard"

export default function AccountList() {
    return (
        <View
            style={{
                flex: 1
            }}>
            <Text
                style={{
                    fontFamily: 'SF-Pro-Rounded_regular',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: 20,
                    paddingLeft: '8%',
                    marginTop: 15,
                    marginBottom: 20
                }}>All account
            </Text>
            <View
                style={{
                    flex: 10,
                    paddingLeft: '8%'
                }}>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: 0
                    }}>
                    <View
                        style={{
                            paddingTop: 10,
                            paddingBottom: 10
                        }}>
                        <AccountCard
                            username='levanbang'
                            role='Admin'
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})