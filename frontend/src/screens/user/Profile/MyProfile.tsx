import * as React from 'react'
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native'
import Button from '../../../components/button/Button'
import color from '../../../styles/color'

export default function MyProfile() {
    return (
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
                    <Button type='warning' content='UPDATE TDEE' />
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
                        Weight:
                    </Text>
                    <Text
                        style={[
                            styles.text_regular,
                            styles.textSize_18,
                            styles.color_1,
                        ]}
                    >
                        70 kg
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text_bold, styles.textSize_18]}>
                        Height:
                    </Text>
                    <Text
                        style={[
                            styles.text_regular,
                            styles.textSize_18,
                            styles.color_1,
                        ]}
                    >
                        1.8 m
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text_bold, styles.textSize_18]}>
                        Current TDEE:
                    </Text>
                    <Text
                        style={[
                            styles.text_regular,
                            styles.textSize_18,
                            styles.color_1,
                        ]}
                    >
                        2100
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text_bold, styles.textSize_18]}>
                        Current target:
                    </Text>
                    <Text
                        style={[
                            styles.text_regular,
                            styles.textSize_18,
                            styles.color_1,
                        ]}
                    >
                        Increase weight
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
                    <Button type='error' content='LOG OUT' />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 30,
        marginBottom: 40,
        paddingHorizontal: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    text_bold: {
        fontFamily: 'SF-Pro-Rounded_bold',
        paddingRight: 10,
    },
    text_regular: {
        fontFamily: 'SF-Pro-Rounded_medium',
    },
    textSize_23: {
        fontSize: 23,
    },
    textSize_18: {
        fontSize: 18,
    },
    color_1: {
        color: color.textBackground,
    },
    marginBottom: {
        marginBottom: 10,
    },

    infoContainer: {
        paddingHorizontal: 20,
    },
    textContainer: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        paddingRight: 20,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})
