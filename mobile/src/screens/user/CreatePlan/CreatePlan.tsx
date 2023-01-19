import AnimatedLottieView from 'lottie-react-native'
import * as React from 'react'
import { ScrollView, Text, View } from 'react-native'
import UserContext, { UserContextInterface } from '../../../context/UserContext'
import styles from './styles'

import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'

export default function CreatePlan({ navigation }: any) {
    const { name, createPlanList, setCreatePlanList, setMyPlan } =
        React.useContext<UserContextInterface>(UserContext)
    const [visible, setVisible] = React.useState<boolean>(false)
    const [success, setSuccess] = React.useState<boolean>(false)
    const [alertMessage, setAlertMessage] = React.useState<string>('')

    return (
        <>
            <Alert
                type='create_plan'
                title={success ? 'Success' : 'Fail'}
                message={alertMessage}
                visible={visible}
                setVisible={setVisible}
            />
            {createPlanList.length !== 0 ? (
                <ScrollView>
                    <View style={styles.foodContainer}></View>
                    <View style={styles.summary}>
                        <View style={styles.textContainer}>
                            <Text
                                style={[styles.text_semibold, styles.textSize]}
                            >
                                Number of food:
                            </Text>
                            <Text
                                style={[styles.text_regular, styles.textSize]}
                            >
                                {createPlanList.length}
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text
                                style={[styles.text_semibold, styles.textSize]}
                            >
                                Total Calories
                            </Text>
                            <Text
                                style={[styles.text_regular, styles.textSize]}
                            >
                                totalCalories
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text
                                style={[styles.text_semibold, styles.textSize]}
                            >
                                Total Protein
                            </Text>
                            <Text
                                style={[styles.text_regular, styles.textSize]}
                            >
                                totalProtein
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text
                                style={[styles.text_semibold, styles.textSize]}
                            >
                                Total Carb
                            </Text>
                            <Text
                                style={[styles.text_regular, styles.textSize]}
                            >
                                totalCarb
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text
                                style={[styles.text_semibold, styles.textSize]}
                            >
                                Total Fat
                            </Text>
                            <Text
                                style={[styles.text_regular, styles.textSize]}
                            >
                                totalFat
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View>
                            <Button
                                content='CANCEL'
                                type='error'
                                onPress={() => {
                                    setVisible(false)
                                    navigation.goBack()
                                }}
                            />
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                                display:
                                    createPlanList.length === 3
                                        ? 'flex'
                                        : 'none',
                            }}
                        >
                            <Button content='CREATE' type='confirm' />
                        </View>
                    </View>
                </ScrollView>
            ) : (
                <AnimatedLottieView
                    style={styles.empty}
                    source={require('../../../../assets/animation/empty.json')}
                    autoPlay
                    loop
                />
            )}
        </>
    )
}
