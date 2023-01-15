import { ResizeMode } from 'expo-av'
import * as React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { text } from '../../styles/basic'
import styles from './styles'

const Nutrition = (): JSX.Element => {
    return (
        <Pressable style={[styles.background, styles.backgroundHorizontal]}>
            <Image
                style={styles.imgNutrition}
                source={{
                    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
                }}
                fadeDuration={300}
                resizeMode={ResizeMode.COVER}
            />
            <View style={styles.contentHorizontal}>
                <Text
                    style={[text.bold, text.color_black, text.size_medium]}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >
                    Food's name
                </Text>
                <View>
                    <Text
                        style={[
                            text.regular,
                            text.color_black,
                            text.size_extraSmall,
                        ]}
                    >
                        Calories: 200
                    </Text>
                    <Text
                        style={[
                            text.regular,
                            text.color_black,
                            text.size_extraSmall,
                        ]}
                    >
                        Protein: 100
                    </Text>
                    <Text
                        style={[
                            text.regular,
                            text.color_black,
                            text.size_extraSmall,
                        ]}
                    >
                        Carb: 50
                    </Text>
                    <Text
                        style={[
                            text.regular,
                            text.color_black,
                            text.size_extraSmall,
                        ]}
                    >
                        Fat: 20
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Nutrition
