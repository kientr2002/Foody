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
            <ScrollView contentContainerStyle={styles.information_container}>
                <View style={styles.image}></View>
                {/* Dish name */}
                <Text style={styles.text_1}>Dish name</Text>
                <Input
                    focus={false}
                    value={dishName}
                    setValue={setDishName}
                />

                {/* Calorioes */}
                <Text style={styles.text_1}>Calories</Text>
                <Input
                    focus={false}
                    value={dishCalo}
                    setValue={setDishCalo}
                />

                <Text style={styles.text_1}>Recipe video</Text>
                <Input
                    focus={false}
                    value={dishCalo}
                    setValue={setDishCalo}
                />

                <Text style={styles.text_1}>Image</Text>
                <Input
                    focus={false}
                    value={dishCalo}
                    setValue={setDishCalo}
                />

                <View style={styles.space_3items}>
                    <View>
                        <Text style={styles.text_1}>Protein</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                focus={false}
                                value={dishProtein}
                                setValue={setDishProtein}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text_1}>Fat</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                focus={false}
                                value={dishFat}
                                setValue={setDishFat}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text_1}>Carb</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                focus={false}
                                value={dishCarb}
                                setValue={setDishCarb}
                            />
                        </View>
                    </View>
                </View>

                {/* Description */}
                <Text style={styles.text_1}>Description</Text>
                <TextArea
                    value={description}
                    setValue={setDescription}
                />

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
                    <View>
                        <Button
                            content='SUBMIT'
                            type='confirm'
                            onPress={() => setSubmit(true)}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
