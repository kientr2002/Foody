import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ScrollView } from 'react-native'
import FavoriteCard from '../../../components/favorite/Favorite'
import { FavoriteStackParamList } from '../../../util/navigator'
import styles from './styles'

type Props = NativeStackScreenProps<FavoriteStackParamList>

const Favorite = ({ route, navigation }: Props): JSX.Element => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FavoriteCard.FavoriteHolder
                type='favorite'
                name='Favorite'
                onPress={() => navigation.navigate('Favorite List')}
            />
            <FavoriteCard.FavoriteHolder type='your list' name='Your list #1' />
            <FavoriteCard.FavoriteHolder type='your list' name='Your list #2' />
            <FavoriteCard.FavoriteHolder type='add' name='Create new list' />
        </ScrollView>
    )
}

export default Favorite
