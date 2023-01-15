import { StyleSheet } from 'react-native'
import { color } from '../../styles/basic'

const styles = StyleSheet.create({
    container: {
        width: '87%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        position: 'relative',

        borderRadius: 18,
        backgroundColor: color.white,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    icon: {
        width: '15%',
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
    },
    inputContainer: {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    inputContainer2: {
        width: '100%',
    },
    inputText: {
        height: 35,
    },
    inputText2: {
        height: 39,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
})

export default styles
