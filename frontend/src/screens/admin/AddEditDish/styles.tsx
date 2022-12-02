import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        height: 250,
    },
    information_container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        width: 120,
    },
    space_3items: {
        flexDirection: 'row',
        marginTop: 10,
    },
    text_1: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 19,
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 10
    },
    button_container: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        paddingTop: 30,
        marginRight: 20,
        marginBottom: 20
    },
    button: {
        marginHorizontal: 10
    }
})

export default styles
