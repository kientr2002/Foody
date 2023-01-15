import * as React from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { text } from '../../styles/basic'
import Button from '../button/Button'

import styles from './styles'

export interface AlertAttribute {
    visible: boolean
    type: string
    title?: string
    message?: string
    setVisible: (v: boolean) => void
    handleOk?: () => void
}

function ButtonBox(props: any) {
    return (
        <View style={styles.buttonBox}>
            {props?.notifyType === 1 && (
                <Button
                    type='error'
                    content='cancel'
                    onPress={() => props?.setVisible(false)}
                />
            )}
            {props?.notifyType === 3 && (
                <Button
                    type='confirm'
                    content='OK'
                    onPress={() => {
                        props?.setVisible(false)
                        props?.handleOk?.()
                    }}
                />
            )}
            {props?.notifyType !== 3 && (
                <Button
                    type='confirm'
                    content='OK'
                    onPress={() => {
                        props?.setVisible(false)
                        props?.handleOk?.()
                    }}
                />
            )}
        </View>
    )
}

/*
    Component Alert
        type (String): decide number button on the alert
            values: 
                'edit', 'remove', 'logout' -> type 1: alert will have 2 buttons
                'add', 'forgot_password', 'create_plan' -> type 2: alert will have 1 button
        title (String): title of the alert
        message (String): message of the alert
        visible (boolean): the visibility of the alert
        setVisible (Function): set the visibility of the alert
*/

const useNotifyType = (type: string): number | null => {
    const [notifyType, setNotifyType] = React.useState<number | null>(null)

    React.useEffect(() => {
        if (type === 'edit' || type === 'remove' || type === 'logout')
            setNotifyType(1)
        else if (
            type === 'forgot_password' ||
            type === 'add' ||
            type === 'create_plan'
        )
            setNotifyType(2)
        else if (type === 'change_password') setNotifyType(3)
    }, [type])

    return notifyType
}

export default function Alert({
    type,
    title,
    message,
    visible,
    setVisible,
    handleOk,
}: AlertAttribute) {
    const notifyType = useNotifyType(type)

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            <Pressable
                style={styles.backdrop}
                onPress={() => setVisible(false)}
            />
            <View style={styles.alertBox}>
                <View style={styles.box}>
                    <Text
                        style={[
                            styles.title,
                            text.bold,
                            text.size_big,
                            text.color_black,
                        ]}
                    >
                        {title}
                    </Text>
                    <Text
                        style={[
                            styles.message,
                            text.medium,
                            text.size_small,
                            text.color_gray,
                        ]}
                    >
                        {message}
                    </Text>
                    <ButtonBox
                        notifyType={notifyType}
                        setVisible={setVisible}
                        handleOk={handleOk}
                    />
                </View>
            </View>
        </Modal>
    )
}
