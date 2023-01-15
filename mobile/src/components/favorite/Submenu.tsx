import { FontAwesome } from '@expo/vector-icons'
import * as React from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { text } from '../../styles/basic'
import styles from './styles'

export type SubmenuAttribute = {
    item?: any
    visible: boolean
    setVisible: (visible: boolean) => void
}

const SubmenuItem = ({ name }: any): JSX.Element => {
    return (
        <View style={styles.submenuItem}>
            <Text style={[text.semiBold, text.size_small, text.color_black]}>
                {name}
            </Text>
            <Pressable>
                <FontAwesome name='plus-circle' size={22} color='black' />
            </Pressable>
        </View>
    )
}

const Submenu = ({
    item,
    visible,
    setVisible,
}: SubmenuAttribute): JSX.Element => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(true)}
        >
            <Pressable
                style={styles.backdrop}
                onPress={() => setVisible(false)}
            />
            <View style={styles.submenu}>
                <View style={styles.submenuBox}>
                    <SubmenuItem name={'Favorite'} />
                    <SubmenuItem name={'Your list 1'} />
                </View>
            </View>
        </Modal>
    )
}

export default Submenu
