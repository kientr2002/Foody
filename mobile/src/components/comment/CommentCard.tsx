import * as React from 'react'
import { Text, View } from 'react-native'
import { text } from '../../styles/basic'
import Stars from '../stars/Stars'
import styles from './styles'

const ReviewCard = (): JSX.Element => {
    return (
        <View style={styles.reviewCard}>
            <View style={styles.reviewCardTitle}>
                <Text
                    style={[
                        text.bold,
                        text.size_medium,
                        text.color_black,
                        styles.username,
                    ]}
                >
                    Username
                </Text>
                <Stars rate={4} />
            </View>
            <Text
                style={[
                    text.regular,
                    text.size_small,
                    text.color_black,
                    styles.reviewCardBody,
                ]}
            >
                Good food
            </Text>
        </View>
    )
}

export default ReviewCard
