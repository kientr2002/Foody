import { StyleSheet } from "react-native"
import color from "../../../styles/color"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: '8%',
        backgroundColor: color.background
    },
    button: {
        flex: 1,
        marginTop: 20,
        marginBottom: 10
    },
    title_container: {
        flex: 1
    },
    title: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    food_list: {
        flex: 10,
        width: '100%',
        justifyContent: 'center',
        paddingBottom: 70
    }

})

export default styles