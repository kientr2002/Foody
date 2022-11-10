import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'

import Button from '../../../src/components/button/Button';
import styles from '../../../src/components/card/styles';
import color from "../../../src/styles/color"

export const Status = () => {
  return(
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'yellow', height: '25%', width: '100%'}}>

        </View>
        <View style={{backgroundColor: 'red', height: '50%', width: '100%'}}>

        </View>
        <View style={{backgroundColor: 'green', height: '50%', width: '100%'}}>

        </View>
      </View>
  )
}

const Header = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      
    </SafeAreaView> 
  )
}