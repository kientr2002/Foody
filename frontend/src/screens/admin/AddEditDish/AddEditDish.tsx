import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import Card from '../../../components/card/Card'
import AccountCard from '../../../components/accountCard/AccountCard'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import AlertAdmin from '../../../components/alertAdmin/AlertAdmin'
import TextArea from '../../../components/textarea/TextArea'
import styles from './styles'
export default function AddEditDish({ route, navigation }: any) {
    const { name, des, calo, protein, fat, carb }: any = route?.params

    const [dishName, setDishName] = React.useState<string>(name)
    const [dishCalo, setDishCalo] = React.useState<string>(calo?.toString())
    const [dishProtein, setDishProtein] = React.useState<string>(
        protein?.toString()
    )
    const [dishFat, setDishFat] = React.useState<string>(fat?.toString())
    const [dishCarb, setDishCarb] = React.useState<string>(carb?.toString())
    const [description, setDescription] = React.useState<string>(des)
    const [submit, setSubmit] = React.useState<boolean>(false)

    return (
        <>
            <AlertAdmin visible={submit} setVisible={setSubmit} />
            <View style={styles.information_container}>
                <ScrollView>
                    <View style={styles.image}></View>
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
                            value={dishCalo}
                            setValue={setDishCalo}
                        />
                    </View>
                    {/* Protein-Fat-Carb */}
                    <View style={styles.space_3items}>
                        <View style={styles.protein_carb}>
                            <Text style={styles.text_1}>Protein</Text>
                            <Input
                                type=''
                                focus={false}
                                value={dishProtein}
                                setValue={setDishProtein}
                            />
                        </View>
                        <View style={styles.fat}>
                            <Text style={styles.text_1}>Fat</Text>
                            <Input
                                type=''
                                focus={false}
                                value={dishFat}
                                setValue={setDishFat}
                            />
                        </View>
                        <View style={styles.protein_carb}>
                            <Text style={styles.text_1}>Carb</Text>
                            <Input
                                type=''
                                focus={false}
                                value={dishCarb}
                                setValue={setDishCarb}
                            />
                        </View>
                    </View>

                    {/* Description */}
                    <View style={styles.space}>
                        <Text style={styles.text_1}>Description</Text>
                        {/* <TextInput
                            type=''
                            focus={false}
                            value={description}
                            setValue={setDescription}
                        /> */}
                        <TextArea
                            value={description}
                            setValue={setDescription}
                        />
                    </View>
                    {/* Button DELETE and EDIT */}
                    <View style={styles.button_container}>
                        <View style={styles.button}>
                            <Button
                                content='CANCEL'
                                type='error'
                                onPress={() => {
                                    setSubmit(false)
                                    navigation.goBack()
                                }}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                content='SUBMIT'
                                type='confirm'
                                onPress={() => setSubmit(true)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
