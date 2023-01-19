import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../components/button/Button'
import Card from '../../../components/card/Card'
import { text } from '../../../styles/basic'
import { FavoriteStackParamList } from '../../../util/navigator'
import styles from './styles'

type Props = NativeStackScreenProps<FavoriteStackParamList>

const FavoriteList = ({ route, navigation }: Props): JSX.Element => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <View>
                        <Text
                            style={[
                                text.bold,
                                { fontSize: 22 },
                                text.color_black,
                            ]}
                        >
                            Favorite food
                        </Text>
                        <Text
                            style={[
                                text.semiBold,
                                text.size_small,
                                text.color_gray,
                            ]}
                        >
                            23 foods
                        </Text>
                    </View>
                    <Button
                        type='confirm'
                        content='ADD FOOD'
                        onPress={() => navigation.navigate('Find food')}
                    />
                </View>

                <View style={styles.cardContainer}>
                    <Card.FavoriteCard />
                    <Card.FavoriteCard />
                    <Card.FavoriteCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FavoriteList
