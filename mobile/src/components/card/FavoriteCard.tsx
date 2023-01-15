import { FontAwesome } from '@expo/vector-icons'
import { ResizeMode } from 'expo-av'
import * as React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { text } from '../../styles/basic'
import styles from './styles'

export type FavoriteCardAttribute = {
    add?: boolean
}

const FavoriteCard = ({ add }: FavoriteCardAttribute): JSX.Element => {
    const [clicked, setClicked] = React.useState<boolean>(false)

    const handleAdd = () => {
        //TODO: handle when click add food
    }

    const handleRemove = () => {
        //TODO: handle when click remove food
    }

    return (
        <View style={[styles.background, styles.backgroundHorizontal]}>
            <Image
                style={styles.imgHorizontal}
                source={{
                    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
                }}
                fadeDuration={300}
                resizeMode={ResizeMode.COVER}
            />
            <View style={styles.contentAddToFavorite}>
                <Text
                    style={[text.bold, text.color_black, text.size_medium]}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >
                    Food's name
                </Text>
                <Pressable
                    onPress={() => (add ? handleAdd() : handleRemove())}
                    onPressIn={() => setClicked(true)}
                    onPressOut={() => setClicked(false)}
                >
                    {add ? (
                        <FontAwesome
                            name='plus-circle'
                            size={21}
                            color='black'
                            style={[
                                styles.add,
                                clicked ? styles.clicked : null,
                            ]}
                        />
                    ) : (
                        <FontAwesome
                            name='times-circle'
                            size={21}
                            color='black'
                            style={[
                                styles.add,
                                clicked ? styles.clicked : null,
                            ]}
                        />
                    )}
                </Pressable>
            </View>
        </View>
    )
}

export default FavoriteCard
