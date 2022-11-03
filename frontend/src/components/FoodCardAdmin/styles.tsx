import { StyleSheet } from "react-native"
import color from "../../styles/color"

const styles = StyleSheet.create({
    background: {
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: color.background,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 30
    },
    title: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 25
    },
    background_3: {
        width: '90%',
        height: 90,
        flexDirection: 'row'
    },
    img_3: {
        width: 120,
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    content_2: {
        width: '65%',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    name: {
        flex: 10,
        justifyContent: 'center'
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
    },
    iconActive: {
        color: color.second,
        shadowColor: "#000",
        elevation: 10
    }
})

export default styles