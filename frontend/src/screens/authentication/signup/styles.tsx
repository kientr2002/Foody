import { StyleSheet } from 'react-native'
import color from '../../../styles/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 30,
        color: color.text,
        marginBottom: 20,
        marginLeft: 20,
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        marginBottom: 5,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },
    logInContainer: {
        alignSelf: 'center',
        marginTop: 20,
    },
    highlightText: {
        fontFamily: 'SF-Pro-Rounded_heavy',
        fontSize: 15,
        color: color.primary,
    },
    marginLeft_10: {
        marginLeft: 5,
    },
})

export default styles
