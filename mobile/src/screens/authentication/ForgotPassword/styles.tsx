import { StyleSheet } from 'react-native'
import { color } from '../../../styles/basic'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: -5,
        marginLeft: 20,
    },
    step: {
        marginLeft: 20,
        marginBottom: 5,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },
    warningText: {
        color: 'tomato',
        alignSelf: 'flex-start',
        fontWeight: 'bold',

        marginTop: 5,
        marginBottom: 5,
    },

    sendAgain: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    sendAgainText: {
        marginLeft: 5,
        color: color.second,
    },
})

export default styles
