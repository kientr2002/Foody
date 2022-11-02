import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View, Text } from 'react-native'
import { HomeStackParamList } from '../../../util/types'

import Card from '../../../components/card/Card'

type Props = NativeStackScreenProps<HomeStackParamList>

export default function FoodDetail({ route, navigation }:Props) {
    const {cardStyle, name, rate, imgSrc, body}:any = route.params

    return (
        <>
            <View style={styles.container}>
                <Text>{name}</Text>
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