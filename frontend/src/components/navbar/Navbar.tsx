import React from 'react'
import { Pressable, View } from 'react-native'
import { FontAwesome5, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

export default function Navbar() {
    const [active, setActive] = React.useState<string>('home')

    return (
        <View style={styles.background}>
            <Pressable
                style={styles.element}
                onPress={() => setActive('home')}
            >
                <Entypo 
                    name="home" 
                    size={25} 
                    style={active === 'home' ? styles.iconActive : styles.icon}
                />
            </Pressable>
            <Pressable
                style={styles.element}
                onPress={() => setActive('plan')}
            >
                <FontAwesome5 
                    name="calendar-day" 
                    size={23} 
                    style={active === 'plan' ? styles.iconActive : styles.icon} 
                />
            </Pressable>
            <Pressable
                style={styles.element}
                onPress={() => setActive('search')}
            >
                <FontAwesome 
                    name="search" 
                    size={24} 
                    style={active === 'search' ? styles.iconActive : styles.icon} 
                />
            </Pressable>
            <Pressable
                style={styles.element}
                onPress={() => setActive('favorite')}
            >
                <MaterialIcons 
                    name="favorite" 
                    size={26} 
                    style={active === 'favorite' ? styles.iconActive : styles.icon}  
                />
            </Pressable>
            <Pressable
                style={styles.element}
                onPress={() => setActive('profile')}
            >
                <FontAwesome 
                    name="user-circle-o" 
                    size={24} 
                    style={active === 'profile' ? styles.iconActive : styles.icon}  
                />
            </Pressable>
        </View>
    )
}