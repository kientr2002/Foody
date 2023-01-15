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
        marginBottom: 20,
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
        alignItems: 'center',
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

    target: {
        marginLeft: '6.5%',
        alignSelf: 'flex-start',
    },
    targetHeader: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 20,
        marginBottom: 5,
    },
    chooseButton: {
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
    },
    textChooseButton: {
        fontFamily: 'SF-Pro-Rounded_regular',
        fontSize: 17,
        marginLeft: 10,
    },
    outter: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        width: 15,
        height: 15,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
})

export default styles
