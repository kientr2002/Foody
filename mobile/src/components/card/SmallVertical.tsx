import { ResizeMode } from 'expo-av'
import * as React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { text } from '../../styles/basic'
import Stars from '../stars/Stars'
import styles from './styles'

export type SmallVerticalAttribute = {
    onPress: () => void
}

const SmallVertical = ({ onPress }: SmallVerticalAttribute): JSX.Element => {
    return (
        <Pressable
            style={[styles.background, styles.backgroundSmallVertical]}
            onPress={onPress}
        >
            <Image
                style={styles.imgSmallVertical}
                source={{
                    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
                }}
                fadeDuration={300}
                resizeMode={ResizeMode.COVER}
            />
            <View style={styles.contentVertical}>
                <View>
                    <Text
                        style={[text.bold, text.color_black, text.size_medium]}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        Food's name
                    </Text>
                    <Text
                        style={[
                            text.regular,
                            text.color_gray,
                            text.size_extraSmall,
                        ]}
                        numberOfLines={2}
                    >
                        This dish is created by ThoaiLe, an Asia chef. He want
                        to create a dish that not only good for your health but
                        also easy to do
                    </Text>
                </View>
                <Stars rate={4}></Stars>
            </View>
        </Pressable>
    )
}

export default SmallVertical
