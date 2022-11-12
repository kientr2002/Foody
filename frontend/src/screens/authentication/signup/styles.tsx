import { StyleSheet } from 'react-native'
import color from '../../../../src/styles/color'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: '8%',
        backgroundColor: color.background,
    },
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: color.background,
    },
    Body: {
        height: '81%',
        width: '100%',
        backgroundColor: color.background,
    },
    Entity: {
        height: '7%',
        width: '100%',
        backgroundColor: color.background,
    },
    HeadBody: {
        height: '8%',
        width: '100%',
        backgroundColor: color.background,
    },
    Title: {
        fontFamily: 'SF-Pro-Rounded_heavy',
        fontSize: 25,
    },
    Button: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 30,

        display: 'flex',
        flexDirection: 'row',
        marginLeft: 112,
        backgroundColor: color.background,
    },
    space: {
        height: '4.5%',
        width: '100%',
        backgroundColor: color.background,
    },
    litleSpace: {
        height: '2.8%',
        width: '100%',
        backgroundColor: color.background,
    },
    Footer: {
        height: '4%',
        width: '100%',
        backgroundColor: color.background,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textFooter: {
        fontFamily: 'SF-Pro-Rounded_regular',
    },
    clicktextFooter: {
        color: '#AED910',
        fontFamily: 'SF-Pro-Rounded_heavy',
    },
})

export default styles
