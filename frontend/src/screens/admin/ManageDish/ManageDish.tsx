import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '../../../components/card/Card'
import Button from '../../../components/button/Button'
export default function ManageDish() {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginLeft: 30
                }}
            >
                {/* Header */}
                <View
                    style={{
                        flex: 1
                    }}>

                </View>
                {/* Add dish */}
                <View
                    style={{
                        flex: 1,
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
                            fontSize: 17,
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
                    }}
                >
                    <ScrollView
                        style={{
                            backgroundColor: '#FFFFFF'
                        }}
                    >
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
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex: 1
                    }}>

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