import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Button from '../../../components/button/Button'
import { ProfileStackParamList } from '../../../util/navigator'
import styles from './styles'

type Props = NativeStackScreenProps<ProfileStackParamList>

const Profile = ({ navigation }: Props): JSX.Element => {
    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <Image
                    source={{
                        uri: ``,
                    }}
                    style={styles.avatar}
                />
                <View>
                    <Text style={[styles.text_bold, styles.textSize_23]}>
                        username
                    </Text>
                    <Text
                        style={[
                            styles.text_regular,
                            styles.textSize_18,
                            styles.color_1,
                            styles.marginBottom,
                        ]}
                    >
                        email
                    </Text>
                    <Button
                        type='warning'
                        content='UPDATE TDEE'
                        onPress={() => {
                            navigation.navigate('Update status')
                        }}
                    />
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
                        name
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
                    ></Text>
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
                        weight kg
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
                        height m
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
                        TDEE
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
                        object
                    </Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View
                    style={{
                        marginRight: 10,
                    }}
                >
                    <Button
                        type='confirm'
                        content='CHANGE PASSWORD'
                        onPress={() => {
                            navigation.navigate('Change password')
                        }}
                    />
                </View>
                <View>
                    <Button type='error' content='LOG OUT' />
                </View>
            </View>
        </ScrollView>
    )
}

export default Profile
