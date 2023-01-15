import { StyleSheet } from 'react-native'
import { color } from '../../styles/basic'

const styles = StyleSheet.create({
    starContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    star: {
        color: color.yellow,
        paddingLeft: 2,
        paddingRight: 2,
    },
})

export default styles
