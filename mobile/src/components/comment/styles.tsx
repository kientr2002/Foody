import { StyleSheet } from 'react-native'
import { color } from '../../styles/basic'

const styles = StyleSheet.create({
    reviewInput: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: color.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 1,
    },
    input: {
        width: '70%',
        marginRight: 10,
    },
    comment: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 5,

        fontFamily: 'SF-Pro-Rounded_regular',
        fontSize: 18,
    },

    reviewCard: {
        width: '90%',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: color.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 1,
    },
    reviewCardTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewCardBody: {
        marginLeft: 10,
    },
    username: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    starContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    star: {
        color: color.yellow,
        paddingLeft: 2,
        paddingRight: 2,
    },
})

export default styles
