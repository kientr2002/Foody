import { StyleSheet } from 'react-native'
import color from '../../../styles/color'

const styles = StyleSheet.create({
    logoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 155,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 33,
        color: color.text,
        marginBottom: 20,
        marginLeft: 20,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 20,
    },

    buttonContainer: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },

    focusPassContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    highlightText: {
        fontFamily: 'SF-Pro-Rounded_heavy',
        fontSize: 15,
        color: color.primary,
    },
    marginTop_10: {
        marginTop: 10,
    },
    marginLeft_10: {
        marginLeft: 5,
    },

    signUpContainer: {
        alignSelf: 'center',
        marginBottom: 10,
    },
})

export default styles
