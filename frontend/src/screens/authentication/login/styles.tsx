
import color from "../../../../src/styles/color"
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    fontTitle: {
      justifyContent: 'center', 
      alignItems: 'center', 
      fontFamily: 'SF-Pro-Rounded_bold', 
      fontSize: 32, 
      marginLeft: 20
    },
    box: {
      width: windowWidth - 60, 
      height: 45, 
      marginTop: 20, 
      marginLeft: 20, 
      borderRadius: 10,
      shadowColor: '#171717',
      backgroundColor: '#FFFFFF', 
      flexDirection: 'column', 
      borderBottomWidth: 0.05, 
      borderTopWidth: 0.01, 
      borderLeftWidth: 0.05, 
      borderRightWidth: 0.1
    },
    titleBox: {
      justifyContent: 'center', 
      alignItems: 'center', 
      fontFamily: 'SF-Pro-Rounded_regular', 
      color: '#ADAAAA', 
      fontSize: 9
    },
    hiddenTexbox: {
      height: '100%', 
      flex : 1, 
      marginLeft: 10, 
      fontSize: 20
    },
    hiddenTexbox2: {
      height: '100%', 
      flex : 1, 
      marginLeft: 14, 
      fontSize: 20
    },
    containerForgotPassword: {
      width: windowWidth - 60, 
      height: 45,
      marginTop: 20,
      marginLeft: 20, 
      borderRadius: 10
    },
    textForgotPassword: {
      color: '#AED910', 
      fontFamily: 'SF-Pro-Rounded_heavy', 
      fontSize: 14, 
      position: 'absolute', 
      right: 0
    },
    containerFooter: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'row'
    }
})

export default styles