import * as React from 'react'
import { View, Image, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export interface CardAttribute {
    cardStyle: number,
    name: string,
    body: {
        description: string,
        calories: number,
        protein: number,
        fat: number,
        carb: number
    },
    imgSrc: string,
    rate: number
}

interface StarsAttribute {
    rate: number,
    style: number
}

function Stars({ rate, style }: StarsAttribute) {
    if (style != 1 && style != 2)
        return null

    let starArr:string[] = []
    for (let i=0; i < 5; i++) {
        if (i < rate)
            starArr.push('star')
        else 
            starArr.push('staro')
    }

    return (
        <View style={styles.starContainer}>
            {starArr.map(element => (
                <AntDesign 
                    name={element === 'star' ? "star" : "staro"} 
                    size={20} 
                    style={styles.star} 
                />
            ))}
        </View>
    )
}

export default function Card({ cardStyle, name, body, rate, imgSrc} : CardAttribute) {
    const [backgroundSize, setBackgroundSize] = React.useState<any>(null)
    const [imgSize, setImgSize] = React.useState<any>(null)
    const [textSize, setTextSize] = React.useState<any>(null)

    // decide with style card will use
    React.useEffect(() => {
        switch (cardStyle) {
            case 1: 
                setBackgroundSize(styles.background_1)
                setImgSize(styles.img_1)
                setTextSize(styles.content_1)
                break
            case 2:
                setBackgroundSize(styles.background_2)
                setImgSize(styles.img_2)
                setTextSize(styles.content_1)
                break
            case 3:
                setBackgroundSize(styles.background_3)
                setImgSize(styles.img_3)
                setTextSize(styles.content_2)
                break
            case 4:
                setBackgroundSize(styles.background_3)
                setImgSize(styles.img_4)
                setTextSize(styles.content_2)
                break
        }
    }, [cardStyle])


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
                <View>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    {cardStyle !== 4 ?
                        <Text style={styles.text} numberOfLines={cardStyle === 3 || cardStyle === 4 ? 3 : 0}>
                            {body.description}
                        </Text> :
                        <View>
                            <Text style={styles.text_2}>Calories: {body.calories}</Text>
                            <Text style={styles.text_2}>Protein: {body.protein}</Text>
                            <Text style={styles.text_2}>Carb: {body.carb}</Text>
                            <Text style={styles.text_2}>Fat: {body.fat}</Text>
                        </View>
                    }
                </View>
                <Stars rate={rate} style={cardStyle}></Stars>
            </View>
        </View>
    )
}