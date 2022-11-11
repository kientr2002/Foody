import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import color from '../../../../styles/color'
const styles = StyleSheet.create({
    button: {
      width: '90%',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 20,
      backgroundColor: color.background,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      zIndex: 1,
    },
    container: {
      
      marginLeft: 10,
      flexDirection: 'row',
      minHeight: 42,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      marginLeft: 175
      
    },
    containerText: {
      marginLeft: 20
    },
    buttonText: {
      fontFamily: 'SF-Pro-Rounded_bold',
      fontSize: 16,
    },
    dropdown: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: '100%',
      shadowColor: '#000000',
      shadowRadius: 4,
      shadowOffset: { height: 4, width: 0 },
      shadowOpacity: 0.5,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
    item: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
    },
});
export default styles;