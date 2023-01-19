import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    foodContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summary: {
        paddingHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textContainer: {
        flexDirection: 'row',
    },
    text_semibold: {
        fontFamily: 'SF-Pro-Rounded_semibold',
    },
    text_regular: {
        marginLeft: 10,
        fontFamily: 'SF-Pro-Rounded_regular',
    },
    textSize: {
        fontSize: 18,
    },
    buttonContainer: {
        marginVertical: 10,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles
