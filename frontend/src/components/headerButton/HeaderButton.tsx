import * as React from 'react'
import { Pressable, View, Animated } from 'react-native'
import { FontAwesome5, MaterialIcons  } from '@expo/vector-icons'

import styles from './styles'
import color from '../../styles/color'

interface HeaderButtonAttribute {
    type: number
}

export default function HeaderButton({type}:HeaderButtonAttribute) {
    const [like, setLike] = React.useState<boolean>(false)
    const [inPlan, setInPlan] = React.useState<boolean>(false)

    const handleAddToPlan = () => {
        setInPlan(true)
    }

    const handleRemoveFromPlan = () => {
        setInPlan(false)
    }

    const handleAddToFavorite = () => {
        setLike(true)
    }

    const handleRemoveFromFavorite = () => {
        setLike(false)
    }

    return (
        <>
            {type === 1 ? 
                <View style={styles.container}>
                    <Pressable style={styles.item}>
                        <FontAwesome5 name="shopping-basket" size={23} color={color.textBackground} />
                    </Pressable> 
                </View> :
                <View style={styles.container}>
                    <Pressable 
                        style={styles.item}
                        onPress={() => {
                            !like ? handleAddToFavorite() : handleRemoveFromFavorite()
                        }}
                    >

                        <MaterialIcons name="favorite" size={27} color={like ? 'tomato' : color.textBackground} />
                    </Pressable>
                    <View>
                        <Pressable 
                            style={[styles.item, inPlan ? styles.overlap_disappear : null ]}
                            onPress={handleAddToPlan}    
                        >
                            <MaterialIcons name="add-circle" size={27} color={color.textBackground} />
                        </Pressable> 
                        <Pressable 
                            style={[styles.item, !inPlan ? styles.overlap_disappear : null]}
                            onPress={handleRemoveFromPlan}    
                        >
                            <MaterialIcons name="check-circle" size={27} color={color.primary} />
                        </Pressable>
                    </View>
                </View>  
            }
        </>
    )
}
