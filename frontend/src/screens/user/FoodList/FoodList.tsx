import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, ScrollView, FlatList, Text } from 'react-native'
import { HomeStackParamList } from '../../../util/types'
import Card from '../../../components/card/Card'

import styles from './styles'

type Props = NativeStackScreenProps<HomeStackParamList>

export default function FoodDetail({ route, navigation }: Props) {
    const handleOnPress = () => {
        navigation.navigate(
            'Food Detail', 
            {
                cardStyle: 1,
                name: 'Food name',
                body: {
                    description: 'This dish is created by ThoaiLe, an Asia chef. He want to create a dish that not only good for your health but also easy to do',
                    calories: 1200,
                    protein: 400,
                    fat: 20,
                    carb: 210
                },
                imgSrc: '../../../assets/food.jpg',
                rate: 4
            }
        )
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingLeft: 20,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        >
            <Card
                cardStyle={1}
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
            <Card
                cardStyle={1}
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
            <Card
                cardStyle={1}
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
        </ScrollView>
    )
}
