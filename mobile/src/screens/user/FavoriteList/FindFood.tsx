import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../../../components/card/Card'
import Input from '../../../components/input/Input'
import styles from './styles'

const FindFood = (): JSX.Element => {
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <Input type='search' />
            </View>

            <ScrollView contentContainerStyle={styles.cardContainer}>
                <Card.FavoriteCard add />
                <Card.FavoriteCard add />
                <Card.FavoriteCard add />
                <Card.FavoriteCard add />
            </ScrollView>
        </SafeAreaView>
    )
}

export default FindFood
