import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, ScrollView, FlatList, Text } from 'react-native'
import { HomeStackParamList } from '../../../util/types'
import Card from '../../../components/card/Card'

import styles from './styles'

type Props = NativeStackScreenProps<HomeStackParamList>

const demoObj = {
    cardStyle: 1,
    name: 'Food name',
    body: {
        description: 'This dish is created by ThoaiLe, an Asia chef. He want to create a dish that not only good for your health but also easy to do',
        calories: 250,
        protein: 120,
        fat: 50,
        carb: 90
    },
    recipe: [
        {
            step: 1,
            body: 'Do step 1'
        },
        {
            step: 2,
            body: 'Do step 2'
        },
        {
            step: 3,
            body: 'Do step 3'
        }
    ],
    imgSrc: '../../../assets/food.jpg',
    rate: 4
}
const objArr = [
    demoObj,
    {...demoObj, name: 'Food name 2', rate: 3},
    {...demoObj, name: 'Food name 3', rate: 4},
    {...demoObj, name: 'Food name 4', rate: 5},
    {...demoObj, name: 'Food name 5', rate: 0},
    {...demoObj, name: 'Food name 6', rate: 1},
]

export default function FoodDetail({ route, navigation }: Props) {
    const handleOnPress = (obj:any) => {
        navigation.navigate(
            'Food Detail', 
            obj
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.mealTitle}>Breakfast</Text>
                <ScrollView
                    contentContainerStyle={styles.mealContainer}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {objArr.map((obj, i) => (
                        <Card
                            key={i}
                            cardStyle={1}
                            name={obj.name}
                            body={obj.body}
                            imgSrc={obj.imgSrc}
                            rate={obj.rate}
                            onPress={() => handleOnPress(obj)}
                        />
                    ))}
                </ScrollView>
            </View>
            <View>
                <Text style={styles.mealTitle}>Lunch</Text>
                <ScrollView
                    contentContainerStyle={styles.mealContainer}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {objArr.map((obj, i) => (
                        <Card
                            key={i}
                            cardStyle={1}
                            name={obj.name}
                            body={obj.body}
                            imgSrc={obj.imgSrc}
                            rate={obj.rate}
                            onPress={() => handleOnPress(obj)}
                        />
                    ))}
                </ScrollView>
            </View>
            <View>
                <Text style={styles.mealTitle}>Dinner</Text>
                <ScrollView
                    contentContainerStyle={styles.mealContainer}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {objArr.map((obj, i) => (
                        <Card
                            key={i}
                            cardStyle={1}
                            name={obj.name}
                            body={obj.body}
                            imgSrc={obj.imgSrc}
                            rate={obj.rate}
                            onPress={() => handleOnPress(obj)}
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={{marginVertical: 10}}></View>
        </ScrollView>
    )
}