import * as React from "react"
import { ScrollView, Text, View, StyleSheet } from "react-native" 

import Button from "../../../components/button/Button"
import FoodCardAdmin from "../../../components/FoodCardAdmin/FoodCardAdmin"

import color from "../../../styles/color"
import styles from "./styles"

export default function DishList({ navigation }:any) {
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
                    </ScrollView>

                </View>
            </View>
        </>
    )
}