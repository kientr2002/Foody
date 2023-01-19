import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'transparent',
    },
    mealContainer: {
        backgroundColor: 'transparent',
        paddingLeft: 20,
        marginBottom: 20,
    },
    title: {
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default styles
