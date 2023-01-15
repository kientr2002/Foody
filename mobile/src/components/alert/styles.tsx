import { StyleSheet } from 'react-native'
import { color } from '../../styles/basic'

const styles = StyleSheet.create({
    alertBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '100%',
        maxWidth: 350,
        marin: 24,
        backgroundColor: color.white,
        borderRadius: 20,
        elevation: 0,
    },
    title: {
        margin: 24,
        marginBottom: 0,
    },
    message: {
        margin: 24,
        marginTop: 5,
        marginBottom: 15,
    },
    backdrop: {
        backgroundColor: '#00000045',
        opacity: 0.3,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 15,
    },
})

export default styles
