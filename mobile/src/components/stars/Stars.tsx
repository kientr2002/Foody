import { AntDesign } from '@expo/vector-icons'
import * as React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Stars = (props: { rate: number }): JSX.Element => {
    let starArr: string[] = []
    for (let i = 0; i < 5; i++) {
        if (i < props.rate) starArr.push('star')
        else starArr.push('staro')
    }

    return (
        <View style={styles.starContainer}>
            {starArr.map((element, i) => (
                <AntDesign
                    key={i}
                    name={element === 'star' ? 'star' : 'staro'}
                    size={20}
                    style={styles.star}
                />
            ))}
        </View>
    )
}

export default Stars
