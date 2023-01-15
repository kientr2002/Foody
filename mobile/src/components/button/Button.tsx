import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import { color, text } from '../../styles/basic'

import styles from './styles'

export interface ButtonAttribute {
    type: string
    content?: string
    arrow?: boolean
    comment?: boolean
    onPress?: () => void
}

/*
    Component Button:
        content (String): the text inside button
        type (String): color of the button, value: 'confirm', 'warning', 'error'
            - 'confirm': green
            - 'warning': yellow
            - 'error': red
        arrow (Boolean): show arrow icon or not
        comment (Boolean): show send icon, not using this with others
        onPress (Function): action when press in the button
*/

const useButtonColor = (
    type: string
): { baseColor: string; focusColor: string } => {
    const [baseColor, setBaseColor] = React.useState<string>(color.primary)
    const [focusColor, setFocusColor] = React.useState<string>(
        color.primaryFocus
    )
    React.useEffect(() => {
        if (type === 'warning') {
            setBaseColor(color.warning)
            setFocusColor(color.warningFocus)
        } else if (type === 'error') {
            setBaseColor(color.error)
            setFocusColor(color.errorFocus)
        } else {
            setBaseColor(color.primary)
            setFocusColor(color.primaryFocus)
        }
    }, [type])

    return { baseColor, focusColor }
}

export default function Button({
    content,
    type,
    arrow,
    comment,
    onPress,
}: ButtonAttribute) {
    const [pressed, setPressed] = React.useState<boolean>(false)
    const { baseColor, focusColor } = useButtonColor(type)

    const handlePressIn = () => {
        setPressed(true)
        if (onPress) onPress()
    }

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={() => setPressed(false)}
            style={{
                ...styles.button,
                backgroundColor: !pressed ? baseColor : focusColor,
            }}
        >
            {comment && <Ionicons name='send' size={20} style={styles.icon} />}
            <Text style={[styles.text, text.bold, text.size_extraSmall]}>
                {content?.toUpperCase()}
            </Text>
            {arrow && (
                <FontAwesome5
                    name='long-arrow-alt-right'
                    size={21}
                    style={[styles.icon, styles.arrow]}
                />
            )}
        </Pressable>
    )
}
