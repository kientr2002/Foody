import { FontAwesome } from '@expo/vector-icons'
import React, { FC, ReactElement, useRef, useState } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { text } from '../../styles/basic'
import styles from './styles'

type DropdownAttribute = {
    label: string
    data: Array<string>
    onSelect: (item: string) => void
}

const Dropdown = ({
    label,
    data,
    onSelect,
}: DropdownAttribute): JSX.Element => {
    const DropdownButton = useRef<TouchableOpacity>(null)
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState<string>()
    const [dropdownTop, setDropdownTop] = useState(0)

    const toggleDropdown = (): void => {
        visible ? setVisible(false) : openDropdown()
    }

    const openDropdown = (): void => {
        DropdownButton?.current?.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py + h / 2)
        })
        setVisible(true)
    }

    const onItemPress = (item: string): void => {
        setSelected(item)
        onSelect(item)
        setVisible(false)
    }

    const renderItem = ({ item }: any): JSX.Element => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text style={[text.medium, text.size_extraSmall]}>{item}</Text>
        </TouchableOpacity>
    )

    const renderDropdown = (): JSX.Element => {
        return (
            <Modal visible={visible} transparent animationType='none'>
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={[styles.dropdown, { top: dropdownTop }]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    return (
        <TouchableOpacity
            ref={DropdownButton}
            style={styles.button}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            <Text
                style={[
                    styles.buttonText,
                    text.medium,
                    text.size_small,
                    text.color_black,
                ]}
            >
                {selected || label}
            </Text>
            <FontAwesome name='caret-down' size={22} color='black' />
        </TouchableOpacity>
    )
}

export default Dropdown
