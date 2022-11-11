import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        flex: 4,
        backgroundColor: '#BBBBBB',
    },
    information_container: {
        flex: 6,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20,
    },
    space: {
        marginTop: 20,
    },
    space_3items: {
        flexDirection: 'row',
        marginTop: 20,
    },
    text_1: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 20,
        color: '#000000',
    },
    protein_carb: {
        flex: 1,
    },
    fat: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    button_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
})

export default styles
