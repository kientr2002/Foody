import * as React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

export interface AccountCardAttribute {
    username: string,
    role: string,
    status: string
}

export default function AccountCard({ username, role, status }: AccountCardAttribute) {
    return (
        <View
            style={styles.view_layout}
        >
            <Image
                style={styles.img_1}
                source={require('../../../assets/food.jpg')}
                fadeDuration={300}
            />
            <View
                // style={textSize}
                style={{
                    borderRadius: 20
                }}
            >
                <View>
                    <Text
                        style={styles.text_1}
                    >
                        {username}
                    </Text>
                </View>
                {/* Role */}
                <View
                    style={styles.text_direction}
                >
                    <View>
                        <Text
                            style={styles.text_2}
                        >
                            Role:
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_3}
                        >
                            {role}
                        </Text>
                    </View>
                </View>
                {/* Status */}
                <View
                    style={styles.text_direction}
                >
                    <View>
                        <Text
                            style={styles.text_2}
                        >
                            Status:
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={styles.text_3}
                        >
                            {status}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}