import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import * as React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import * as Progress from 'react-native-progress'

import Button from '../../../components/button/Button'
import FavoriteCard from '../../../components/favorite/Favorite'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import { color } from '../../../styles/basic'
import styles from './styles'

const Tab = createMaterialTopTabNavigator()

function Review({ foodId }: any) {
    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                    marginTop: 5,
                }}
            ></View>
            <View style={styles.reviewCardContainer}></View>
        </ScrollView>
    )
}

function About({ des, recipt, calo, protein, fat, carb }: any) {
    const [total, setTotal] = React.useState<number>(0)

    React.useEffect(() => {
        setTotal(protein + fat + carb)
    }, [protein, carb, fat])

    return (
        <ScrollView style={styles.tabBody}>
            {/* Nutrient section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nutrient</Text>
                <View style={styles.sectionContainer}>
                    <View style={styles.nutrientElement}>
                        <Text
                            style={[
                                styles.sectionText,
                                styles.nutrientElementTitle,
                            ]}
                        >
                            Calories
                        </Text>
                        <Progress.Bar
                            style={styles.progressBar}
                            progress={calo ? calo * 0.7 : 0}
                            width={250}
                            height={13}
                            color={'#E3A74D'}
                            borderWidth={0}
                        />
                    </View>
                    <View style={styles.nutrientElement}>
                        <Text
                            style={[
                                styles.sectionText,
                                styles.nutrientElementTitle,
                            ]}
                        >
                            Protein
                        </Text>
                        <Progress.Bar
                            style={styles.progressBar}
                            progress={protein ? protein / total : 0}
                            width={250}
                            height={13}
                            color={'#DC4040'}
                            borderWidth={0}
                        />
                    </View>
                    <View style={styles.nutrientElement}>
                        <Text
                            style={[
                                styles.sectionText,
                                styles.nutrientElementTitle,
                            ]}
                        >
                            Carb
                        </Text>
                        <Progress.Bar
                            style={styles.progressBar}
                            progress={carb ? carb / total : 0}
                            width={250}
                            height={13}
                            color={'#3DC73A'}
                            borderWidth={0}
                        />
                    </View>
                    <View style={styles.nutrientElement}>
                        <Text
                            style={[
                                styles.sectionText,
                                styles.nutrientElementTitle,
                            ]}
                        >
                            Fat
                        </Text>
                        <Progress.Bar
                            style={styles.progressBar}
                            progress={fat ? fat / total : 0}
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
                    <Text style={styles.sectionText}>{des}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recipe</Text>
                <View style={styles.sectionContainer}>
                    <Button content='Go to recipe' type='confirm' />
                </View>
            </View>
        </ScrollView>
    )
}

export default function FoodDetail({ route }: any) {
    const { isClickOnFavorite, setIsClickOnFavorite } =
        React.useContext<UserContextInterface>(UserContext)

    return (
        <>
            <FavoriteCard.Submenu
                visible={isClickOnFavorite}
                setVisible={setIsClickOnFavorite}
            />
            <View style={styles.videoContainer}>
                <Image
                    source={{
                        uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
                    }}
                    style={styles.video}
                />
            </View>

            <Tab.Navigator
                style={styles.bodyContainer}
                screenOptions={{
                    tabBarInactiveTintColor: color.gray,
                    tabBarActiveTintColor: color.black,
                    tabBarLabelStyle: styles.headerText,
                    tabBarStyle: {
                        elevation: 0,
                        backgroundColor: color.white,
                    },
                    tabBarPressColor: '000000',
                    tabBarItemStyle: {
                        paddingVertical: 5,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primary,
                    },
                }}
            >
                <Tab.Screen name='About'>
                    {(props) => (
                        <About
                            {...props}
                            des={'des'}
                            calo={1200}
                            protein={500}
                            fat={100}
                            carb={200}
                            recipt={null}
                        />
                    )}
                </Tab.Screen>
                <Tab.Screen name='Review'>
                    {(props) => <Review {...props} foodId={1} />}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    )
}
