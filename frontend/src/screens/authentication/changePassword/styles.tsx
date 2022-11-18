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
        marginBottom: 4,
        marginLeft: 20,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 10,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },
})
export default styles
