import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { MyPlanStackParamList } from '../../../util/navigator'
import styles from './styles'

type Props = NativeStackScreenProps<MyPlanStackParamList>

const MyPlan = ({ route, navigation }: Props): JSX.Element => {
    return <ScrollView contentContainerStyle={styles.container}></ScrollView>
}

export default MyPlan
