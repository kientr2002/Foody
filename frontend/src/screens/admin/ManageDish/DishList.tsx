import * as React from "react"
import { ScrollView, Text, View, StyleSheet } from "react-native" 
import Button from "../../../components/button/Button"
import FoodCardAdmin from "../../../components/FoodCardAdmin/FoodCardAdmin"
import color from "../../../styles/color"

export default function DishList({ navigation }:any) {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingLeft: '8%',
                    backgroundColor: color.background
                }}
            >
                {/* Add dish */}
                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        marginBottom: 10
                    }}
                >
                    <Button
                        content='ADD DISH'
                        type='warning'
                        arrow={false}
                    />
                </View>
                {/* All dish */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'SF-Pro-Rounded_bold',
                            fontSize: 20,
                            fontStyle: 'italic',
                            fontWeight: 'bold'
                        }}
                    >
                        All dish
                    </Text>
                </View>

                {/* List */}
                <View
                    style={{
                        flex: 10,
                        width: '100%',
                        justifyContent: 'center',
                        paddingBottom: 70
                    }}
                >
                    <ScrollView
                    >
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                            onPress={() => navigation.navigate('Dish detail')}
                        />
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                        />
                        <FoodCardAdmin
                            name='Thịt luộc'
                            imgSrc='../../../assets/food.jpg'
                        />
                    </ScrollView>

                </View>
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