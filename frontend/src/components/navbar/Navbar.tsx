import React from 'react'
import { Pressable, View } from 'react-native'
import { FontAwesome5, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

export interface NavAttribute {
    type: string
}
export interface NavElementAttribute {
    active: string,
    setActive: (active: string) => void
}

function User({ active, setActive }: NavElementAttribute) {
    return (
        <>
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
        </>
    )
}

function Admin({ active, setActive }:NavElementAttribute) {
    return (
        <>
            <Pressable
                style={styles.element}
                onPress={() => setActive('accountManager')}
            >
                <FontAwesome 
                    name="users" 
                    size={21} 
                    style={active === 'accountManager' ? styles.iconActive : styles.icon}
                />
            </Pressable>
            <Pressable
                style={styles.element}
                onPress={() => setActive('foodManager')}
            >
                <FontAwesome5
                    name="pen" 
                    size={21} 
                    style={active === 'foodManager' ? styles.iconActive : styles.icon}
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
        </>
    )
}


/*
    Component NavBar:
        type (String): choose menu for user and admin, value: 'user', 'admin'
*/

export default function Navbar({ type }:NavAttribute) {
    const [active, setActive] = React.useState<string>(type === 'user' ? 'home' : 'accountManager')

    return (
        <View style={styles.background}>
            {type === 'user' ? 
                <User
                    active={active}
                    setActive={setActive}
                /> : 
                <Admin 
                    active={active}
                    setActive={setActive}
                />
            }
        </View>
    )
}