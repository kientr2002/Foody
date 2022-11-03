import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity, Animated } from 'react-native'
import * as Progress from 'react-native-progress'
import { HomeStackParamList } from '../../../util/types'

import styles from './styles'
import color from '../../../styles/color'

type Props = NativeStackScreenProps<HomeStackParamList>
const Tab = createMaterialTopTabNavigator()

interface FoodBody {
    description: string,
    calories: number,
    protein: number
    fat: number,
    carb: number
}

function Recipe({ recipe }:any) {
    return (
        <View style={styles.tabBody}>
            {recipe?.map((item:any, i:any) => (
                <View
                    key={i}
                    style={styles.recipe}
                >
                    <Text style={styles.recipeTitle}>Step {item?.step}</Text>
                    <Text>{item?.body}</Text>
                </View>
            ))}
        </View>
    )
}

function About({ body }:any) {
    return (
        <ScrollView style={styles.tabBody}>
            {/* Nutrient section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nutrient</Text>
                <View style={styles.sectionContainer}>
                    <View style={styles.nutrientElement}>
                        <Text style={[styles.sectionText, styles.nutrientElementTitle]}>Calories</Text>
                        <Progress.Bar 
                            style={styles.progressBar}
                            progress={1}
                            width={250}
                            height={13}
                            color={'#E3A74D'}
                            borderWidth={0}
                        />
                    </View>
                    <View style={styles.nutrientElement}>
                        <Text style={[styles.sectionText, styles.nutrientElementTitle]}>Protein</Text>
                        <Progress.Bar 
                            style={styles.progressBar}
                            progress={body ? (body?.protein/body?.calories) : 0}
                            width={250}
                            height={13}
                            color={'#DC4040'}
                            borderWidth={0}
                        />
                    </View>
                    <View style={styles.nutrientElement}>
                        <Text style={[styles.sectionText, styles.nutrientElementTitle]}>Carb</Text>
                        <Progress.Bar 
                            style={styles.progressBar}
                            progress={body ? (body?.carb/body?.calories) : 0}
                            width={250}
                            height={13}
                            color={'#3DC73A'}
                            borderWidth={0}
                        />
                    </View>
                    <View style={styles.nutrientElement}>
                        <Text style={[styles.sectionText, styles.nutrientElementTitle]}>Fat</Text>
                        <Progress.Bar 
                            style={styles.progressBar}
                            progress={body ? (body?.fat/body?.calories) : 0}
                            width={250}
                            height={13}
                            color={'#DD34AE'}
                            borderWidth={0}
                        />
                    </View>
                </View>
            </View>

            {/* Description section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Description</Text>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionText}>{body?.description}</Text>
                </View>
            </View>

            {/* Comment section */}
            <View>
            <Text style={styles.sectionTitle}>Reviews</Text>
                <View style={styles.sectionContainer}>
                    <Text>Hlello</Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default function FoodDetail({ route, navigation }:Props) {
    const { name, recipe, body, imgSrc }:any = route.params

    return (
        <>
            <View style={styles.imgContainer}>
                <Image 
                    source={require('../../../../assets/food.jpg')}
                    style={styles.img}
                />
            </View>

            <Tab.Navigator 
                style={styles.bodyContainer}
                screenOptions={{
                    tabBarInactiveTintColor: color.textBackground,
                    tabBarActiveTintColor: color.text,
                    tabBarLabelStyle: styles.headerText,
                    tabBarStyle: { 
                        elevation: 0,
                        backgroundColor: color.background               
                    },
                    tabBarPressColor: '000000',
                    tabBarItemStyle: { 
                        paddingVertical: 5
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primary
                    }
                }}
            >
                <Tab.Screen name='Recipe'>
                    {(props) => <Recipe {...props} recipe={recipe} />}
                </Tab.Screen>
                <Tab.Screen name='About'>
                    {(props) => <About {...props} body={body} />}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    )
}
