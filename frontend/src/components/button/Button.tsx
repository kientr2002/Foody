import * as React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons';

import color from '../../styles/color'
import styles from './styles'

export interface ButtonAttribute {
    content: string,
    type: string,
    arrow: Boolean
}

const buttonColor = {
    confirm: [color.primary, '#C4E156'],
    warning: [color.warning, color.warningSupport],
    error: [color.notice, color.noticeSupport]
}


/*
    Component Button:
        content (String): the text inside button
        Type (String): color of the button, value: 'confirm', 'warning', 'error'
            - 'confirm': green
            - 'warning': yellow
            - 'error': red
        Arrow (Boolean): show arrow icon or not
*/

export default function Button({ content, type, arrow }:ButtonAttribute) {
    const [selectedColor, setSelectedColor] = React.useState<Array<string>>(buttonColor.confirm)

    React.useEffect(() => {
        if (type === 'warning')
            setSelectedColor(buttonColor.warning)
        else if (type === 'error')
            setSelectedColor(buttonColor.error)
        else
            setSelectedColor(buttonColor.confirm)
    }, [type])

    return (
        <View>
            <LinearGradient
                colors={selectedColor}
                style={styles.button}
                start={{ x:0, y:0 }}
                end={{ x:1, y:1 }}
            >
                <Text style={styles.text}>{content.toUpperCase()}</Text>
                {arrow && 
                    <FontAwesome5 
                        name="long-arrow-alt-right" 
                        size={21}
                        style={styles.arrow}
                    />
                }
            </LinearGradient>
        </View>
    )
}