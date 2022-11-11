import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    avatar_username_container: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    avatar_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#ADAAAA',
    },
    username_container: {
        flex: 1,
        justifyContent: 'center',
    },
    username: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 25
    },
    email: {
        fontFamily: 'SF-Pro-Rounded_regular',
        fontSize: 17,
        color: '#ADAAAA'
    },
    information_container: {
        flex: 4,
        paddingLeft: 30,
        paddingRight: 30
    },
    line_container: {
        flexDirection: 'row'
    },
    text_1: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 17,
        color: '#000000',
        marginRight: 20,
    },
    text_2: {
        fontFamily: 'SF-Pro-Rounded_regular',
        fontSize: 17,
        color: '#000000',
        marginRight: 20,
    },
    button_container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30
    }
})
export default styles