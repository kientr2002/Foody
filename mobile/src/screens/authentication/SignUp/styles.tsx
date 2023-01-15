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
        marginLeft: '6.5%',
        marginBottom: -5,
    },
    quote: {
        marginLeft: '6.5%',
        marginBottom: 70,
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    loading: {
        marginRight: 5,
    },

    focusPassContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    highlightText: {
        color: color.primary,
    },

    logInContainer: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginLeft: 20,
    },
    warningText: {
        color: 'tomato',
        alignSelf: 'flex-start',
        fontWeight: 'bold',

        marginTop: 5,
        marginBottom: 5,
    },
})

export default styles
