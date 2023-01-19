import * as React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Card from '../../../components/card/Card'
import { text } from '../../../styles/basic'
import styles from './styles'

const MoreFood = (): JSX.Element => {
    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={[text.bold, text.color_black, text.size_medium]}>
                    Breakfast
                </Text>
            </View>

            <View style={styles.foodContainer}>
                <Card.Horizontal />
                <Card.Horizontal />
                <Card.Horizontal />
            </View>
        </ScrollView>
    )
}

export default MoreFood
