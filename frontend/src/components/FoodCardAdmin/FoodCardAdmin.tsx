import * as React from 'react'
import { View, Image, Text, Pressable, PressableProps, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import styles from './styles'
export interface CardAttribute {
    name: string,
    imgSrc: string,
    onPress?: () => void
}

export default function FoodCardAdmin({ name, imgSrc, onPress }: CardAttribute) {
    const [backgroundSize, setBackgroundSize] = React.useState<any>(null)
    const [imgSize, setImgSize] = React.useState<any>(null)
    const [textSize, setTextSize] = React.useState<any>(null)
    const [pressed, setPressed] = React.useState<boolean>(false)
    React.useEffect(() => {
        setBackgroundSize(styles.background_3)
        setImgSize(styles.img_3)
        setTextSize(styles.content_2)
    })

    const handlePressIn = () => {
        setPressed(true)
        // if (onPress)
        //     onPress()
    }

    return (
        <View
            style={[styles.background, backgroundSize]}
        >
            <Image
                style={imgSize}
                source={require('../../../assets/food.jpg')}
                fadeDuration={300}
            />
            <View style={textSize}>
                <View style={styles.name}>
                    <Pressable
                        onPressIn={handlePressIn}
                        onPressOut={() => setPressed(false)}
                    >
                        <Text style={styles.title}>
                            {name}
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.icon}>
                    <Pressable>
                        <FontAwesome5
                            name="ellipsis-v"
                            size={24}
                            color="black"
                        />
                    </Pressable>

                    <View
                        style={styles.menu}
                    >
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 25
                            }}>Edit</Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                margin: 5
                            }}></View>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 25
                            }}>Delete</Text>
                    </View>
                </View>
            </View >
        </View >
    )

}