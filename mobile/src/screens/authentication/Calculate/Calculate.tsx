import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Button from '../../../components/button/Button'
import Dropdown from '../../../components/dropdown/Dropdown'
import Input from '../../../components/input/Input'
import { text } from '../../../styles/basic'
import styles from './styles'

const Calculate = ({ navigation }: any): JSX.Element => {
    const targets = ['Increase Weight', 'Reduce Weight', 'Keep This Weight']
    const activities = [
        'Sedentary',
        'Light exercise (1-2 days/week)',
        'Moderate exercise (3-4 days/week)',
        'Heavy exercise (6-7 days/week)',
        'Athlete exercise (2x per day)',
    ]
    const [weight, setWeight] = React.useState<string>('')
    const [height, setHeight] = React.useState<string>('')
    const [selectedActivity, setSelectedActivity] = React.useState<string>('')
    const [target, setTarget] = useState<string>('')

    return (
        <View style={styles.container}>
            <Text style={[styles.title, text.bold, text.color_black]}>
                Update your status
            </Text>

            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <Input type='weight' value={weight} setValue={setWeight} />
                </View>
                <View style={styles.input}>
                    <Input type='height' value={height} setValue={setHeight} />
                </View>
                <View style={styles.input}>
                    <Dropdown
                        label='Activity'
                        data={activities}
                        onSelect={(question) => {
                            setSelectedActivity(question)
                        }}
                    />
                </View>
                <View style={[styles.input, styles.target]}>
                    <Text style={styles.targetHeader}>Choose your target</Text>
                    <View>
                        {targets.map((t: string, i: number) => (
                            <View key={i} style={styles.chooseButton}>
                                <TouchableOpacity
                                    style={styles.outter}
                                    onPress={() => setTarget(t)}
                                >
                                    {t === target && (
                                        <View style={styles.inner} />
                                    )}
                                </TouchableOpacity>
                                <Text style={styles.textChooseButton}>{t}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button content='SUBMIT' type='confirm' />
            </View>
        </View>
    )
}

export default Calculate