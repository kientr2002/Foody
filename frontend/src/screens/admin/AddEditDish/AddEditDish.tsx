import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'

export default function AddEditDish({ route }: any) {
    const { name, recipe, body, imgSrc }: any = route?.params

    const [dishName, setDishName] = React.useState<string>(name)
    const [calories, setCalories] = React.useState<string>(
        body?.calories.toString()
    )
    const [protein, setProtein] = React.useState<string>(
        body?.protein.toString()
    )
    const [fat, setFat] = React.useState<string>(body?.fat.toString())
    const [carb, setCarb] = React.useState<string>(body?.carb.toString())
    const [description, setDescription] = React.useState<string>(
        body?.description
    )
    const [step1, setStep1] = React.useState<string>('')

    return (
        <>
            <View style={styles.image}></View>

            <View style={styles.information_container}>
                <ScrollView>
                    {/* Dish name */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Dish name</Text>
                        <Input
                            type=''
                            focus={false}
                            value={dishName}
                            setValue={setDishName}
                        />
                    </View>

                    {/* Calorioes */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Calories</Text>
                        <Input
                            type=''
                            focus={false}
                            value={calories}
                            setValue={setCalories}
                        />
                    </View>
                    {/* Protein-Fat-Carb */}
                    <View style={styles.space_3items}>
                        <View style={styles.protein_carb}>
                            <Text style={styles.text_1}>Protein</Text>
                            <Input
                                type=''
                                focus={false}
                                value={protein}
                                setValue={setProtein}
                            />
                        </View>
                        <View style={styles.fat}>
                            <Text style={styles.text_1}>Fat</Text>
                            <Input
                                type=''
                                focus={false}
                                value={fat}
                                setValue={setFat}
                            />
                        </View>
                        <View style={styles.protein_carb}>
                            <Text style={styles.text_1}>Carb</Text>
                            <Input
                                type=''
                                focus={false}
                                value={carb}
                                setValue={setCarb}
                            />
                        </View>
                    </View>

                    {/* Description */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Description</Text>
                        <Input
                            type=''
                            focus={false}
                            value={description}
                            setValue={setDescription}
                        />
                    </View>
                    {/* Step 1 */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Step 1</Text>

                        <Input
                            type=''
                            focus={false}
                            value={step1}
                            setValue={setStep1}
                        />
                    </View>
                </ScrollView>
            </View>

            {/* Button DELETE and EDIT */}
            <View style={styles.button_container}>
                <View style={styles.button}>
                    <Button content='CANCEL' type='error' />
                </View>
                <View style={styles.button}>
                    <Button content='SUBMIT' type='confirm' />
                </View>
            </View>
        </>
    )
}
