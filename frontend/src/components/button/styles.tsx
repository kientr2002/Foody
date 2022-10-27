import { StyleSheet } from "react-native"
import color from "../../styles/color"

const styles = StyleSheet.create({
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: color.background,
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 17,
    },
    arrow: {
        paddingLeft: 10,
        color: color.background
    }
})

export default styles