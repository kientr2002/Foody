import {
    Entypo,
    FontAwesome,
    FontAwesome5,
    MaterialIcons,
} from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import styles from './styles'

const Navbar = ({ state, descriptors, navigation }: any): JSX.Element => {
    return (
        <View style={styles.background}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true })
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole='button'
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.element}
                    >
                        {label === 'Home page' ? (
                            <Entypo
                                name='home'
                                size={25}
                                style={
                                    isFocused ? styles.iconActive : styles.icon
                                }
                            />
                        ) : label === 'MyPlan page' ? (
                            <FontAwesome5
                                name='calendar-day'
                                size={23}
                                style={
                                    isFocused ? styles.iconActive : styles.icon
                                }
                            />
                        ) : label === 'Search page' ? (
                            <FontAwesome
                                name='search'
                                size={24}
                                style={
                                    isFocused ? styles.iconActive : styles.icon
                                }
                            />
                        ) : label === 'Favorite page' ? (
                            <MaterialIcons
                                name='favorite'
                                size={26}
                                style={
                                    isFocused ? styles.iconActive : styles.icon
                                }
                            />
                        ) : (
                            <FontAwesome
                                name='user-circle-o'
                                size={24}
                                style={
                                    isFocused ? styles.iconActive : styles.icon
                                }
                            />
                        )}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default Navbar
