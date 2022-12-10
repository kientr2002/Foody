import * as React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'

import { Food } from '../../../util/interface'
import Button from '../../../components/button/Button'
import Alert from '../../../components/alert/Alert'
import styles from './styles'
import FoodCardAdmin from '../../../components/FoodCardAdmin/FoodCardAdmin'
import color from '../../../styles/color'

export default function DishList({ navigation }: any) {
    const [foods, setFoods] = React.useState<Array<Food>>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [fail, setFail] = React.useState<boolean>(false)
    const [success, setSuccess] = React.useState<boolean>(false)
    const getFoods = async () => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/getListFood'
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setFoods(data.message)
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        getFoods()
    }, [])

    const handleOnPress = (page: string, obj: any) => {
        page === 'Food detail'
            ? navigation.navigate('Food detail', obj)
            : [
                  page === 'Edit Dish'
                      ? navigation.navigate('Edit Food', obj, 'edit')
                      : null,
              ]
    }

    const handleOnPressAdd = () => {
        navigation.navigate('Add Food', { undefined }, 'add')
    }

    const handleOnPressDelete = async (id: number) => {
        try {
            const response = await fetch(
                'https://foodyforapi.herokuapp.com/food',
                {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        foodId: id,
                    }),
                }
            )
            const data = await response.json()
            if (data.result === 'ok') {
                setSuccess(true)
            } else {
                setFail(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.container}>
            <Alert
                type='change_password'
                title='Success'
                message='Success'
                visible={success}
                setVisible={setSuccess}
            />
            <Alert
                type='change_password'
                title='Fail'
                message='Delete failed'
                visible={fail}
                setVisible={setFail}
            />
            {/* Add dish */}
            <View style={styles.button}>
                <Button
                    content='ADD DISH'
                    type='warning'
                    onPress={() => handleOnPressAdd()}
                />
            </View>
            {/* All dish */}
            <View>
                <Text style={styles.title}>All dish</Text>
            </View>

            {/* List */}
            {loading ? (
                <View style={styles.loadingScreen}>
                    <ActivityIndicator size='large' color={color.primary} />
                </View>
            ) : (
                <View style={styles.food_list}>
                    <ScrollView>
                        {foods.map((food: Food, i: number) => (
                            <FoodCardAdmin
                                key={i}
                                name={food.name}
                                imgSrc={food.image}
                                onPress={() =>
                                    handleOnPress('Food detail', food)
                                }
                                onPressEdit={() =>
                                    handleOnPress('Edit Dish', food)
                                }
                                onPressDelete={() =>
                                    handleOnPressDelete(food.id)
                                }
                            />
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    )
}
