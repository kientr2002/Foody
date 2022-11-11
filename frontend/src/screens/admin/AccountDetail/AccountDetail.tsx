import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Button from '../../../components/button/Button'
import styles from './styles'

export default function AccountDetail() {
    return (
        <>
            <View
                style={styles.avatar_username_container}
            >
                <View style={styles.avatar_container}>
                    <View
                        style={styles.avatar}>
                    </View>
                </View>

                <View style={styles.username_container}>
                    <Text
                        style={styles.username}>
                        Username
                    </Text>
                    <Text
                        style={styles.email}
                    >Email
                    </Text>
                </View>
            </View>

            <View
                style={styles.information_container}>

                {/* Name */}
                <View
                    style={styles.line_container}>
                    <View>
                        <Text
                            style={styles.text_1}> Name
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_2}> Bằng
                        </Text>
                    </View>
                </View>

                {/* Day of Birth */}
                <View
                    style={styles.line_container}>
                    <View>
                        <Text
                            style={styles.text_1}> Day of Birth
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_2}> 25/11/2002
                        </Text>
                    </View>
                </View>

                {/* Weight */}
                <View
                    style={styles.line_container}>
                    <View>
                        <Text
                            style={styles.text_1}> Weight
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_2}> 25/11/2002
                        </Text>
                    </View>
                </View>

                {/* Height */}
                <View
                    style={styles.line_container}>
                    <View>
                        <Text
                            style={styles.text_1}> Height
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_2}> 25/11/2002
                        </Text>
                    </View>
                </View>

                {/* Current TDEE */}
                <View
                    style={styles.line_container}>
                    <View>
                        <Text
                            style={styles.text_1}> Current TDEE
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_2}> 25/11/2002
                        </Text>
                    </View>
                </View>

                {/* Current target */}
                <View
                    style={styles.line_container}>
                    <View>
                        <Text
                            style={styles.text_1}> Current target
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_2}> 25/11/2002
                        </Text>
                    </View>
                </View>
            </View >

            <View
                style={styles.button_container}>
                <View
                    style={styles.button}>
                    <Button
                        content='BAN'
                        type='error'
                    />
                </View>
            </View>
        </>
    )
}