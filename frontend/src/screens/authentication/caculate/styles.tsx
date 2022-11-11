import { StyleSheet } from 'react-native'
import color from "../../../../src/styles/color"

const styles_caculate = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: '8%',
      backgroundColor: color.background
    },
    header: {
      height: '15%',
      width: '100%',
      backgroundColor: color.background
    },
    Body: {
      height: '70%',
      width: '100%',
      backgroundColor: color.background
    },
    Footer: {
      height: '15%',
      width: '100%',
      backgroundColor: color.background
    },
    Title: {
      height: '9%',
      width: '100%',
      backgroundColor: 'white'
    },
    Entity: {
      height: '10%',
      width: '100%',
      backgroundColor: color.background
    },
    LittleEntity: {
      width: '100%',
      alignContent: 'center',
      flexDirection: 'column',
      backgroundColor: color.background,  
    },
    fontTitle: {
      fontFamily: 'SF-Pro-Rounded_heavy',
      fontSize: 25
    },
    space: {
      height: '5%',
      width: '100%',
      backgroundColor: color.background
    },
    litlespace: {
      height: '4%',
      width: '100%',
      backgroundColor: color.background
    },
    Activity: { 
      marginLeft: 20,
      flexDirection: 'row'
    },  
    Text: {
      height: '6.5%',
      width: '100%',
      backgroundColor: color.background
    },
    fontText: {
      fontFamily: 'SF-Pro-Rounded_bold',
      fontSize: 16
    },
    Button: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 102, 
      backgroundColor: color.background     
    },
    buttonText: {
      flex: 1,
      textAlign: 'center',
    },
    dropdown: {
      position: 'absolute',
      backgroundColor: '#fff',
      top: 50,
    },  
    chooseButton: {
      flexDirection: 'row',
      marginHorizontal: 15,
      alignItems: 'center',
    } ,
    textChooseButton: {
      fontFamily: 'SF-Pro-Rounded_regular',
      fontSize: 15
    },
    outter: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inner: {
      width: 15,
      height: 15,
      backgroundColor: 'gray',
      borderRadius: 10,
    }
})

export default styles_caculate

