import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import * as React from 'react'
import { Pressable, View } from 'react-native'
import UserContext, { UserContextInterface } from '../../context/UserContext'

import { color } from '../../styles/basic'
import { Food } from '../../util/interface'
import styles from './styles'

type HeaderButtonAttribute = {
    type: number
    navigation?: any
    route?: any
}

const HeaderButton = ({
    type,
    navigation,
    route,
}: HeaderButtonAttribute): JSX.Element => {
    const { setIsClickOnFavorite } =
        React.useContext<UserContextInterface>(UserContext)

    return (
        <>
            {type === 1 ? (
                <View style={styles.container}>
                    <Pressable style={styles.item}>
                        <FontAwesome5
                            name='shopping-basket'
                            size={23}
                            color={color.gray}
                        />
                    </Pressable>
                </View>
            ) : (
                <View style={styles.container}>
                    <Pressable
                        style={styles.item}
                        onPress={() => {
                            setIsClickOnFavorite(true)
                        }}
                    >
                        <MaterialIcons
                            name='favorite'
                            size={27}
                            color={color.gray}
                        />
                    </Pressable>
                    <View>
                        <Pressable style={[styles.item]}>
                            <MaterialIcons
                                name='add-circle'
                                size={27}
                                color={color.gray}
                            />
                        </Pressable>
                        {/* <Pressable style={[styles.item]}>
                            <MaterialIcons
                                name='check-circle'
                                size={27}
                                color={color.primary}
                            />
                        </Pressable> */}
                    </View>
                </View>
            )}
        </>
    )
}

export default HeaderButton
