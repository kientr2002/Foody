import React, { FC, Component, useState } from 'react'
import Select from 'react-select'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'
import Dropdown from '../../../components/dropdown/Dropdown'

export default function Calculate({ navigation, string }: any) {
    const targets = ['Increase Weight', 'Reduce Weight', 'Keep This Weight']
    const [success, setSuccess] = React.useState<boolean>(false)
    const [weight, setWeight] = React.useState<string>('')
    const [height, setHeight] = React.useState<string>('')
    const [activity, setActivity] = useState(undefined)
    const [yourTarget, setYourTarget] = useState<string>('')
    const data = [
        { label: 'Sedentary', value: '1' },
        { label: 'Light exercise (1-2 days/week)', value: '2' },
        { label: 'Moderate exercise (3-4 days/week)', value: '3' },
        { label: 'Heavy exercise (6-7 days/week)', value: '4' },
        { label: 'Athlete exercise (2x per day)', value: '5' },
    ]
    return (
        <>
            <Alert
                type='create_plan'
                title='Success'
                message='Your TDEE has been caculated'
                visible={success}
                setVisible={setSuccess}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Update your status</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type='weight'
                            focus
                            value={weight}
                            setValue={setWeight}
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            type='height'
                            value={height}
                            setValue={setHeight}
                        />
                    </View>

                    <View style={styles.dropdown}>
                        <Dropdown
                            label='Activity'
                            data={data}
                            onSelect={() => setActivity}
                        />
                    </View>

                    <View style={styles.target}>
                        <Text style={styles.targetHeader}>
                            Choose your target
                        </Text>
                        <View style={styles.targetContent}>
                            {targets.map((target) => (
                                <View key={target} style={styles.chooseButton}>
                                    <TouchableOpacity
                                        style={styles.outter}
                                        onPress={() => setYourTarget(target)}
                                    >
                                        {target === yourTarget && (
                                            <View style={styles.inner} />
                                        )}
                                    </TouchableOpacity>
                                    <Text style={styles.textChooseButton}>
                                        {target}{' '}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Button content='Calculate TDEE' type='confirm' arrow />
                </View>
            </ScrollView>
        </>
    )
}
