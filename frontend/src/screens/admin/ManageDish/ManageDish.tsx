import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'

import { StyleSheet, View, Text, ScrollView } from 'react-native'
import FoodCardAdmin from '../../../components/FoodCardAdmin/FoodCardAdmin'
import Button from '../../../components/button/Button'
import color from '../../../styles/color'
import styles from './styles'
export default function ManageDish({ navigation }: { navigation: any }) {
    return (
        <>
            <View
                style={styles.container}
            >
                {/* Add dish */}
                <View
                    style={styles.button}
                >
                    <Button
                        content='ADD DISH'
                        type='warning'
                        arrow={false}
                        onPress={() => navigation.navigate('AddEditDish')}
                    />
                </View>
                {/* All dish */}
                <View
                    style={styles.title_container}
                >
                    <Text
                        style={styles.title}
                    >
                        All dish
                    </Text>
                </View>

                {/* List */}
                <View
                    style={styles.food_list}
                >
                    <ScrollView
                    >
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                            onPress={(name) => navigation.navigate(name)}
                        />
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                            onPress={(name) => navigation.navigate(name)}
                        />
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                            onPress={(name) => navigation.navigate(name)}
                        />
                        {/* <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                            onPress={() => navigation.navigate('AddEditDish')}
                        />
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                            onPress={() => navigation.navigate('AddEditDish')}
                        />
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                            onPress={() => navigation.navigate('AddEditDish')}
                        /> */}
                        {/* <View
                            style={{
                                marginBottom: 20
                            }}
                        >
                            <FoodCardAdmin
                                name='Thịt luộc'
                                imgSrc='../../../assets/food.jpg'
                                onPress={() => navigation.navigate('AddEditDish')}
                            />
                        </View>

                        <View
                            style={{
                                marginBottom: 20
                            }}
                        >
                            <FoodCardAdmin
                                name='Thịt luộc'
                                imgSrc='../../../assets/food.jpg'
                                onPress={() => navigation.navigate('AddEditDish')}
                            />
                        </View>

                        <View
                            style={{
                                marginBottom: 20
                            }}
                        >
                            <FoodCardAdmin
                                name='Thịt luộc'
                                imgSrc='../../../assets/food.jpg'
                                onPress={() => navigation.navigate('AddEditDish')}
                            />
                        </View>

                        <View
                            style={{
                                marginBottom: 20
                            }}
                        >
                            <FoodCardAdmin
                                name='Thịt luộc'
                                imgSrc='../../../assets/food.jpg'
                                onPress={() => navigation.navigate('AddEditDish')}
                            />
                        </View>

                        <View
                            style={{
                                marginBottom: 20
                            }}>
                            <Card
                                cardStyle={3}
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
                        </View> */}
                    </ScrollView>

                </View>
            </View>
        </>
    )
}
