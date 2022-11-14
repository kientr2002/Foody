import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    view_layout: {
        flexDirection: 'row',
        height: 130,
        width: '90%',
        backgroundColor: color.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 2,
    },
    img_1: {
        height: '100%',
        width: '46%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    text_direction: {
        flexDirection: 'row',
    },
    text_1: {
        fontFamily: 'SF-Pro-Rounded_bold',
        fontSize: 20,
        marginLeft: 20,
    },
    text_2: {
        fontFamily: 'SF-Pro-Rounded_regular',
        fontSize: 20,
        marginRight: 10,
        marginLeft: 20,
    },
    text_3: {
        fontFamily: 'SF-Pro-Rounded_regular',
        fontSize: 20,
        color: '#9ABF11',
    },
})

export default styles
