import { StyleSheet } from 'react-native'
import { color } from '../../styles/basic'

const styles = StyleSheet.create({
    background: {
        borderRadius: 20,
        marginBottom: 5,

        display: 'flex',
        flexDirection: 'column',

        backgroundColor: color.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 2,
    },
    backgroundSmallVertical: {
        width: 250,
        height: 390,
        marginRight: 20,
    },
    backgroundLargeVertical: {
        width: '80%',
        marginBottom: 20,
    },
    backgroundHorizontal: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 10,
    },

    imgSmallVertical: {
        width: '100%',
        height: 260,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imgLargeVertical: {
        width: '100%',
        height: 285,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imgHorizontal: {
        width: 120,
        height: 100,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    imgNutrition: {
        width: 160,
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },

    contentVertical: {
        paddingTop: 5,
        paddingBottom: 15,
        paddingHorizontal: 10,
    },
    contentHorizontal: {
        width: '65%',
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 10,
    },
    contentAddToFavorite: {
        width: '65%',
        paddingLeft: 15,
        paddingRight: 20,
        alignSelf: 'center',

        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    add: {
        marginTop: 10,
    },
    clicked: {
        color: color.gray,
    },
})

export default styles
