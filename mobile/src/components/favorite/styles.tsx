import { StyleSheet } from 'react-native'
import { color } from '../../styles/basic'

const styles = StyleSheet.create({
    holderContainer: {
        width: '90%',
        height: 100,
        marginVertical: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconFavorite: {
        backgroundColor: color.error,
    },
    iconMyList: {
        backgroundColor: color.third,
    },
    iconAdd: {
        backgroundColor: '#404040',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 21,
    },

    submenu: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    submenuBox: {
        width: '100%',
        paddingHorizontal: '15%',
        paddingTop: 15,
        backgroundColor: color.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 0,
    },
    submenuItem: {
        marginBottom: 15,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backdrop: {
        backgroundColor: '#00000043',
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})

export default styles
