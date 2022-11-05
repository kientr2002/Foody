import { StyleSheet } from "react-native"
import color from "../../styles/color"

const styles = StyleSheet.create({
    background: {
        position: "relative",
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: color.background,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 10,
        zIndex: 0
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
        justifyContent: 'center'
    },
    iconActive: {
        color: color.second,
        shadowColor: "#000",
        elevation: 10
    },
    menu: {
        position: 'absolute',
        right: 0,
        bottom: -60,
        width: 120,
        height: 120,
        padding: 10,
        backgroundColor: color.background,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 15,
        zIndex: 1
    }
})

export default styles