import * as React from 'react'
import axios from 'axios'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Food, HomeStackParamList } from '../../../util/types'
import Card from '../../../components/card/Card'
import useFetchData from '../../../hooks/useFetchData'


type Props = NativeStackScreenProps<HomeStackParamList>

export default function FoodList({ route, navigation }: Props) {
    const [foods, setFoods] = React.useState< Array<Food> >([])
    const { data }:any = useFetchData('http://localhost:3500/food')

    React.useEffect(() => {
        console.log(data)
    }, [data])

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
                    {foods.map((food:Food, i:number) => (
                        <Card
                            key={i}
                            cardStyle={1}
                            name={food.name}
                            body={food.body}
                            imgSrc={food.imgSrc}
                            rate={food.rate}
                            onPress={() => handleOnPress(food)}
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
                    {foods.map((food:Food, i:number) => (
                        <Card
                            key={i}
                            cardStyle={1}
                            name={food.name}
                            body={food.body}
                            imgSrc={food.imgSrc}
                            rate={food.rate}
                            onPress={() => handleOnPress(food)}
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
                    {foods.map((food:Food, i:number) => (
                        <Card
                            key={i}
                            cardStyle={1}
                            name={food.name}
                            body={food.body}
                            imgSrc={food.imgSrc}
                            rate={food.rate}
                            onPress={() => handleOnPress(food)}
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={{marginVertical: 10}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    mealContainer: {
        backgroundColor: 'transparent',
        paddingLeft: 20,
        marginBottom: 20
    },
    mealTitle: {
        fontFamily: 'SF-Pro-Rounded_semibold',
        fontSize: 23,
        marginLeft: 20,
        marginBottom: 5,
        marginTop: 10
    }
})