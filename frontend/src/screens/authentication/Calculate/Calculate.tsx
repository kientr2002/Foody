import React, { FC, Component, useState } from 'react'
import Select from 'react-select'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import styles from './styles'
import Dropdown from '../../../components/dropdown/Dropdown'



var outputHeight = 0
var outputWeight = 0
var outputActivity = 0
var outputTarget = 0

export default function Calculate({ navigation }: any) {
    const targets = ['Increase Weight', 'Reduce Weight', 'Keep This Weight']
    const [success, setSuccess] = React.useState<boolean>(false)
    const [warningWeight, setWarningWeight] = React.useState<string>('')
    const [warningHeight, setWarningHeight] = React.useState<string>('')
    const [warningActivity, setWarningActivity] = React.useState<string>('')
    const [warningYourTarget, setWarningYourTarget] = useState<string>('')
    const [weight, setWeight] = React.useState<string>('')
    const [height, setHeight] = React.useState<string>('')
    const [activity, setActivity] = React.useState<string>('')
    const [yourTarget, setYourTarget] = useState<string>('')

    const data = [ 'Sedentary',
    'Light exercise (1-2 days/week)',
    'Moderate exercise (3-4 days/week)',
    'Heavy exercise (6-7 days/week)',
    'Athlete exercise (2x per day)',
    ]

    const verifyInformation = (weight: string, height: string, activity: string, target: string) => {
        var  flag = 0
        setSuccess(false)
        if(weight === ''){
            flag++
            outputWeight = 0
            setWarningWeight('Please enter Information')
        } else {
            outputWeight= parseInt(weight,10)
            setWarningWeight('')
        }
        if(height === ''){
            flag++
            outputHeight = 0
            setWarningHeight('Please enter Information')
        } else {
            outputHeight= parseInt(height,10)
            setWarningHeight('')
        }
        if(activity === ''){
            flag++
            outputActivity = 0
            setWarningActivity('Please choose Information')
        }else {
            if(activity === 'Sedentary'){
                outputActivity = 1
            } else if (activity === 'Light exercise (1-2 days/week)'){
                outputActivity = 2
            } else if (activity ===  'Moderate exercise (3-4 days/week)') {
                outputActivity = 3
            } else if (activity === 'Heavy exercise (6-7 days/week)'){
                outputActivity = 4
            } else {
                outputActivity = 5
            }
            setWarningActivity('')
        }
        if(target === ''){
            flag++
            outputTarget = 0
            setWarningYourTarget('Please choose Information')
        } else {
            if(target === 'Increase Weight'){
                outputTarget = 1
            } else if(target === 'Reduce Weight'){
                outputTarget = 2
            } else {
                outputTarget = 3
            }
            setWarningYourTarget('')
           
        }
        if(flag === 0){
            setSuccess(true)
        }
        
    }
    return (
        <>
            <Alert
                type='create_plan'
                title='Success'
                message='Your TDEE has been caculated'
                visible={success}
                setVisible={setSuccess}
                handleOk = {() => navigation.goBack()}
            />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Update your status</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Input
                            type='weight'
                            value={weight}
                            setValue={setWeight}
                        />
                        <Text style={styles.warningText}>
                            {warningWeight}
                        </Text>
                    </View>
                    <View style={styles.input}>
                        <Input
                            type='height'
                            value={height}
                            setValue={setHeight}
                        />
                        <Text style={styles.warningText}>
                            {warningHeight}
                        </Text>
                    </View>

                    <View style={styles.dropdown}>
                        <Dropdown
                            label='Activity'
                            data={data}
                            onSelect={(data) => {
                                setActivity(data)                               
                            }}
                        />
                        <Text style={styles.warningText}>
                            {warningActivity}
                        </Text>
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
                            <Text style={styles.warningText}>
                                {warningYourTarget}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        content='Calculate TDEE'
                        type='confirm'
                        arrow
                        onPress={() => {
                            verifyInformation(weight, height, activity, yourTarget)
                        }}
                    />
                </View>
            </ScrollView>
        </>
    )
}
