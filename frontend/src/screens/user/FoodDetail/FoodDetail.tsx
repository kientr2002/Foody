import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, Image, ScrollView, } from 'react-native'
import * as Progress from 'react-native-progress'
import { ReviewInput, ReviewCard } from '../../../components/review/Review'

import styles from './styles'
import color from '../../../styles/color'

const Tab = createMaterialTopTabNavigator()

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
    const [reviews, setReview] = React.useState< Array<Object> >([])
    const [rate, setRate] = React.useState<number>(0)
    const [comment, setComment] = React.useState<string>('')

    const handleSubmit = (rate:number, comment:string) => {
        setReview([...reviews, {rate, body: comment, username: 'thoaile'}])
    }

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
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ReviewInput 
                        rate={rate}
                        setRate={setRate}
                        comment={comment}
                        setComment={setComment}
                        handleSubmit={handleSubmit}
                    />
                </View>
                <View style={styles.reviewCardContainer}>
                    {reviews.length !== 0 && reviews.map((review:any, i:any) => (
                        <ReviewCard
                            key={i}
                            username={review.username}
                            body={review.body}
                            rate={review.rate}
                        />
                    ))}
                    {reviews.length === 0 && <Text>No comments</Text>}
                </View>
            </View>

        </ScrollView>
    )
}

export default function FoodDetail({ route }:any) {
    const { name, recipe, body, imgSrc }:any = route?.params



    const handleAddToFavorite = () => {
        
    }

    const handeRemoveFromFavorite = () => {

    }

    return (
        <>
            <View style={styles.imgContainer}>
                <Image 
                    source={{ uri: imgSrc }}
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
