import { StyleSheet } from 'react-native'
import { color } from '../../styles/basic'

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    comment: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    text: {
        color: color.white,
    },
    icon: {
        color: color.white,
    },
    arrow: {
        paddingLeft: 10,
    },
})

export default styles
