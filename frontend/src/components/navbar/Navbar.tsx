import React from 'react'
import { Pressable, TouchableOpacity, View, Text } from 'react-native'
import { FontAwesome5, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

export default function Navbar({state, descriptors, navigation} : any) {
    return (
        <View style={styles.background}>
            {state.routes.map((route:any, index:any) => {
                const { options } = descriptors[route.key];
                const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.element}
                    >
                        {
                            label === 'Home' 
                            ?   <Entypo 
                                    name="home" 
                                    size={25} 
                                    style={isFocused ? styles.iconActive : styles.icon}
                                /> 
                            : label === 'Plan'
                            ?   <FontAwesome5 
                                    name="calendar-day" 
                                    size={23} 
                                    style={isFocused ? styles.iconActive : styles.icon} 
                                />
                            : label === 'Search'
                            ?   <FontAwesome
                                    name="search" 
                                    size={24} 
                                    style={isFocused ? styles.iconActive : styles.icon} 
                                />
                            : label === 'Favorite'
                            ?   <MaterialIcons 
                                    name="favorite" 
                                    size={26} 
                                    style={isFocused ? styles.iconActive : styles.icon}  
                                />
                            : label === 'Profile'
                            ?   <FontAwesome 
                                    name="user-circle-o" 
                                    size={24} 
                                    style={isFocused ? styles.iconActive : styles.icon}  
                                />
                            : label === 'AccountManager'
                            ?   <FontAwesome 
                                    name="users" 
                                    size={21} 
                                    style={isFocused ? styles.iconActive : styles.icon}  
                                />
                            :   <FontAwesome5
                                    name="pen" 
                                    size={21} 
                                    style={isFocused ? styles.iconActive : styles.icon}
                                />
                        }
                        
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}