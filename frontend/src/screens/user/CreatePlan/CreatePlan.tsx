import AnimatedLottieView from 'lottie-react-native'
import * as React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'

import Card from '../../../components/card/Card'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import { Food } from '../../../util/types'

export default function CreatePlan({ navigation }:any) {
    const { createPlanList, handleCreatePlan, handleRemoveFromCreatePlan } = React.useContext<UserContextInterface>(UserContext)
    const [totalCalories, setTotalCalories] = React.useState<number>(0)
    const [totalProtein, setTotalProtein] = React.useState<number>(0)
    const [totalFat, setTotalFat] = React.useState<number>(0)
    const [totalCarb, setTotalCarb] = React.useState<number>(0)
    const [success, setSuccess] = React.useState<boolean>(false)

    React.useEffect(() => {
        let c = 0, p = 0, f = 0, cb = 0
        createPlanList.forEach((food:Food) => {
            c += food.body.calories
            p += food.body.protein
            f += food.body.fat
            cb += food.body.carb
        })
        setTotalCalories(c)
        setTotalProtein(p)
        setTotalFat(f)
        setTotalCarb(cb)
    }, [createPlanList])



    return (
        <>
            <Alert 
                type='create_plan'
                title='Success'
                message='Today plan has been created'
                visible={success}
                setVisible={setSuccess}
            />
            {createPlanList.length !== 0 ?
                <ScrollView>   
                    <View style={styles.foodContainer}>
                        {createPlanList.map((food: Food, i:number) => (
                            <Card
                                key={i}
                                cardStyle={4}
                                name={food.name}
                                body={food.body}
                                imgSrc={food.imgSrc}
                                rate={food.rate}
                            />
                        ))}
                    </View>
                    <View style={styles.summary}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text_semibold, styles.textSize]}>Number of food:</Text>
                            <Text style={[styles.text_regular, styles.textSize]}>{createPlanList.length}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text_semibold, styles.textSize]}>Total Calories</Text>
                            <Text style={[styles.text_regular, styles.textSize]}>{totalCalories}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text_semibold, styles.textSize]}>Total Protein</Text>
                            <Text style={[styles.text_regular, styles.textSize]}>{totalProtein}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text_semibold, styles.textSize]}>Total Carb</Text>
                            <Text style={[styles.text_regular, styles.textSize]}>{totalCarb}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text_semibold, styles.textSize]}>Total Fat</Text>
                            <Text style={[styles.text_regular, styles.textSize]}>{totalFat}</Text>
                        </View>
                    </View> 
                    <View style={styles.buttonContainer}>
                        <View>
                            <Button 
                                content='CANCEL'
                                type='error'
                                onPress={() => {
                                    setSuccess(false)
                                    navigation.goBack()
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: 10}}>
                            <Button 
                                content='CREATE'
                                type='confirm'
                                onPress={() => {
                                    if (handleCreatePlan(createPlanList)) {
                                        setSuccess(true)
                                        handleRemoveFromCreatePlan(undefined)
                                    }
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
                : 
                <AnimatedLottieView
                    style={styles.empty}
                    source={require('../../../../assets/animation/empty.json')}
                    autoPlay
                    loop
                />
            }
        </>
    )
}

const styles = StyleSheet.create({
    foodContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summary: {
        paddingHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textContainer: {
        flexDirection: 'row'
    },
    text_semibold: {
      fontFamily: 'SF-Pro-Rounded_semibold'
    },
    text_regular: {
        marginLeft: 10,
        fontFamily: 'SF-Pro-Rounded_regular'
    },
    textSize: {
        fontSize: 18
    },
    buttonContainer: {
        marginVertical: 10,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})