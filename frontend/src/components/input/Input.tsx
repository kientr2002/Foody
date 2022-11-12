import * as React from 'react'
import { View, Text, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import styles from './styles'

export interface InputAttribute {
    type?: string
    focus?: boolean
    editable?: boolean
    value: string
    setValue?: (value: string) => void
}

/*
    Component Input
        type (String): 
            set input type 
            default: '' 
            values 
                'email', 'password' , 'confirm_password', 'name', 'calendar',
                'weight', 'height', 'question', 'answer', 'search', ''
        focus (boolean): set auto focus on that input
        editable
*/

export default function Input({
    type,
    focus,
    editable,
    value,
    setValue,
}: InputAttribute) {
    const [name, setName] = React.useState<string>('')
    const [icon, setIcon] = React.useState<string>('')

    React.useEffect(() => {
        switch (type) {
            case 'email':
                setName('EMAIL')
                setIcon('envelope')
                break
            case 'password':
                setName('PASSWORD')
                setIcon('key')
                break
            case 'confirm_password':
                setName('CONFIRM PASSWORD')
                setIcon('lock')
                break
            case 'name':
                setName('NAME')
                setIcon('signature')
                break
            case 'calendar':
                setName('DATE OF BIRTH')
                setIcon('calendar-day')
                break
            case 'weight':
                setName('WEIGHT')
                setIcon('dumbbell')
                break
            case 'height':
                setName('HEIGHT')
                setIcon('ruler-vertical')
                break
            case 'question':
                setName('QUESTION')
                setIcon('question')
                break
            case 'answer':
                setName('ANSWER')
                setIcon('comment-dots')
                break
            case 'search':
                setName('SEARCH')
                setIcon('search')
                break
            default:
                setName('')
                setIcon('')
        }
    }, [type])

    return (
        <View style={styles.container}>
            {name !== '' && (
                <View style={styles.icon}>
                    <FontAwesome5 name={icon} size={22} color='black' />
                </View>
            )}
            <View style={styles.inputContainer}>
                {name !== '' && name !== 'SEARCH' && (
                    <Text style={styles.nameText}>{name}</Text>
                )}
                <TextInput
                    style={
                        name !== ''
                            ? styles.inputText
                            : [styles.inputText, styles.inputTextDefault]
                    }
                    textAlignVertical='center'
                    autoFocus={focus ? focus : false}
                    editable={editable}
                    value={value}
                    onChangeText={setValue}
                />
            </View>
        </View>
    )
}
