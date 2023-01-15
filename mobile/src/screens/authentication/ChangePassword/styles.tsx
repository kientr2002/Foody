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
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 20,
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
