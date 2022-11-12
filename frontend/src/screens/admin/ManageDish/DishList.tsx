import * as React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { Food } from '../../../util/types'
import Button from '../../../components/button/Button'

import styles from './styles'
import FoodCardAdmin from '../../../components/FoodCardAdmin/FoodCardAdmin'

export default function DishList({ navigation }: any) {
    const [foods, setFoods] = React.useState<Array<Food>>([])
    React.useEffect(() => {
        const data = require('../../../../data/db.json')
        if (data) setFoods(data?.food)
    }, [])

    const handleOnPress = (obj: any) => {
        navigation.navigate('Dish detail', obj)
    }

    return (
        <View style={styles.container}>
            {/* Add dish */}
            <View style={styles.button}>
                <Button 
                    content='ADD DISH' 
                    type='warning'
                />
            </View>
            {/* All dish */}
            <View>
                <Text style={styles.title}>All dish</Text>
            </View>

            {/* List */}
            <View style={styles.food_list}>
                <ScrollView>
                    {foods.map((food: Food, i: number) => (
                        <FoodCardAdmin
                            key={i}
                            name={food.name}
                            imgSrc={food.imgSrc}
                            onPress={() => handleOnPress(food)}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
