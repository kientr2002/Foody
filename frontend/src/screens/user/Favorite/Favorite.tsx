import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Card from '../../../components/card/Card'

export default function Favorite() {
    return (
        <>
            <View style={styles.container}>
                <Card
                    cardStyle={2}
                    name='Food name'
                    body={{
                        description: 'This dish is created by ThoaiLe, an Asia chef. He want to create a dish that not only good for your health but also easy to do',
                        calories: 1200,
                        protein: 400,
                        fat: 20,
                        carb: 210
                    }}
                    imgSrc='../../../assets/food.jpg'
                    rate={4}
                />
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