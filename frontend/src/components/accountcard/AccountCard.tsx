import * as React from 'react'
import { View, Image, Text, Pressable } from 'react-native'

import styles from './styles'

export interface AccountCardAttribute {
    username: string
    role: string
    status: string
    onPress?: () => void
}

export default function AccountCard({
    username,
    role,
    status,
    onPress,
}: AccountCardAttribute) {
    const [pressed, setPressed] = React.useState<boolean>(false)
    const handlePressIn = () => {
        setPressed(true)
        if (onPress) onPress()
    }
    return (
        <View style={styles.view_layout}>
            <Image
                style={styles.img_1}
                source={{uri: 'https://www.clipartmax.com/png/middle/171-1716274_animaljake-the-dog-jake-the-dog-adventure-time.png'}}
                fadeDuration={300}
            />
            <View
                // style={textSize}
                style={{
                    borderRadius: 20,
                }}
            >
                <View>
                    <Pressable
                        onPressIn={handlePressIn}
                        onPressOut={() => setPressed(false)}
                    >
                        <Text style={styles.text_1}>{username}</Text>
                    </Pressable>
                </View>
                {/* Role */}
                <View style={styles.text_direction}>
                    <View>
                        <Text style={styles.text_2}>Role:</Text>
                    </View>
                    <View>
                        <Text style={styles.text_3}>{role}</Text>
                    </View>
                </View>
                {/* Status */}
                <View style={styles.text_direction}>
                    <View>
                        <Text style={styles.text_2}>Status:</Text>
                    </View>
                    <View>
                        <Text style={styles.text_3}>{status}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
