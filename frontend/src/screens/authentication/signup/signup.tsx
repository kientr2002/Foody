import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'

import Button from '../../../../src/components/button/Button';
import color from "../../../../src/styles/color"
import Input from '../../../components/input/Input';
import InputAttribute from "../../../components/input/Input";
import styles from './styles'

export default function SignUp({navigation}:any){
  const Login = () => {
    navigation.navigate('Login')
}
  return(
    <View style= {styles.background}>
        <View style= {styles.header}>
          <TouchableOpacity onPress={() => Login()}>
          <Image source={require('../../../../assets/images-authentication/Vector-Left.png')} style={{marginTop: '12%'}} />
          </TouchableOpacity>
        </View>
        <View style={styles.Body}>
            <View style={styles.HeadBody}>
              <Text style={styles.Title}>
                  Sign up
              </Text>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Entity}>
              <Input type='email' focus={false} value='email'/>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Entity}>
            <Input type='name' focus={false} value='name'/>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Entity}>
            <Input type='calendar' focus={false} value='calendar'/>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Entity}>
            <Input type='password' focus={false} value='password'/>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Entity}>
            <Input type='confirm_password' focus={false} value = 'confirm_password'/>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Entity}>
            <Input type='question' focus={false} value='question'/>
            </View>
            <View style={styles.space}></View>
            <View style={styles.Entity}>
            <Input type='answer' focus={false} value='answer'/>
            </View>
            <View style={styles.litleSpace}></View>
            <View style={styles.Button}>
            <Button content='SIGN UP' type='confirm' arrow={true} />
            </View>
        </View>
        <View style={styles.space}>

        </View>
        <View style={styles.Footer}>
            <Text style={styles.textFooter}>Already have account? </Text>
            <TouchableOpacity onPress={() => Login()}>
        <Text style={styles.clicktextFooter}>Login</Text>
          </TouchableOpacity>  
        </View>
    </View>
  )
}