import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import { text } from '../../styles/basic'
import styles from './styles'

export type FavoriteHolderAttribute = {
    type: string
    name: string
}

const FavoriteHolder = ({
    type,
    name,
}: FavoriteHolderAttribute): JSX.Element => {
    return (
        <Pressable style={styles.holderContainer}>
            <View
                style={[
                    styles.icon,
                    type === 'favorite'
                        ? styles.iconFavorite
                        : type === ' your list'
                        ? styles.iconMyList
                        : styles.iconAdd,
                ]}
            >
                {type === 'favorite' ? (
                    <MaterialIcons name='favorite' size={29} color='white' />
                ) : type === 'your list' ? (
                    <FontAwesome5 name='slack-hash' size={29} color='white' />
                ) : (
                    <FontAwesome5 name='plus' size={29} color='white' />
                )}
            </View>
            <View style={styles.textContainer}>
                <Text style={[text.bold, styles.text, text.color_black]}>
                    {name}
                </Text>
            </View>
        </Pressable>
    )
}

export default FavoriteHolder
