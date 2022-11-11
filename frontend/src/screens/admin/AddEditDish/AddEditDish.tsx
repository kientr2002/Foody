import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '../../../components/card/Card'
import AccountCard from '../../../components/accountCard/AccountCard'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'
export default function AddEditDish() {
    return (
        <>
            <View style={styles.image}></View>

            <View style={styles.information_container}>
                <ScrollView>
                    {/* Dish name */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Dish name</Text>
                        <Input type='' focus={false} />
                    </View>

                    {/* Calorioes */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Calories</Text>
                        <Input type='' focus={false} />
                    </View>
                    {/* Protein-Fat-Carb */}
                    <View style={styles.space_3items}>
                        <View style={styles.protein_carb}>
                            <Text style={styles.text_1}>Protein</Text>
                            <Input type='' focus={false} />
                        </View>
                        <View style={styles.fat}>
                            <Text style={styles.text_1}>Fat</Text>
                            <Input type='' focus={false} />
                        </View>
                        <View style={styles.protein_carb}>
                            <Text style={styles.text_1}>Carb</Text>
                            <Input type='' focus={false} />
                        </View>
                    </View>

                    {/* Description */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Description</Text>
                        <Input type='' focus={false} />
                    </View>
                    {/* Step 1 */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Step 1</Text>

                        <Input type='' focus={false} />
                    </View>
                    {/* Step 2 */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Step 2</Text>
                        <Input type='' focus={false} />
                    </View>
                    {/* Step 3 */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Step 3</Text>
                        <Input type='' focus={false} />
                    </View>

                    {/* Step 4 */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Step 4</Text>
                        <Input type='' focus={false} />
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
