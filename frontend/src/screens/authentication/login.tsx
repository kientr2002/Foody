import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'

import Button from '../../../src/components/button/Button';
import styles from '../../../src/components/card/styles';
import color from "../../../src/styles/color"
import InputAttribute from "../../components/input/Input";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SIGN_IN = 'SIGN_IN';
const GET_STATE = 'GET_STATE';

export const Login = ({  }) => {   
    const [page, setPage] = useState(SIGN_IN);
    const [getPasswordVisible, setPasswordVisible] = useState(false);
    const [getEmail, setEmail] = useState('');
    return(
      <View style={{width: '100%', height : '100%', backgroundColor: '#FFFFFF'}}>
         <View style={{width: '100%', height : '40%'}}>
            <Header/>
          </View> 
          <View style={{width: '100%', height: '50%'}}>
            <Body/>
          </View>
          <View style={{width: '100%', height: '10%'}}>
            <Footer/>
          </View>
      </View> 
      

)
}
const Header = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
    <View style={{width: '100%', height: '30%'}}>
    </View>
    <View style={{justifyContent: 'center',alignItems: 'center', }}>
    <Image 
      source={require('../../../assets/images-authentication/Logo.png' )} 
      />
    </View>

  </SafeAreaView> 
  )
}

const Body = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwHidden, setpwHidden] = useState(true);
  return(
    <View style={{flex: 1}}>
      {/* Login title */}
      <View style={{width: '100%', height: '15%'}}>
        <Text style={{justifyContent: 'center', alignItems: 'center', fontFamily: 'SF-Pro-Rounded_bold', fontSize: 32, marginLeft: 20}}>
          Login
          </Text>
      </View>
      {/* Email */}
      <View style={{width: windowWidth - 60, height: 45, marginTop: 20, marginLeft: 20, borderRadius: 10,
       shadowColor: '#171717', backgroundColor: '#FFFFFF', flexDirection: 'column', 
       borderBottomWidth: 0.05, borderTopWidth: 0.01, borderLeftWidth: 0.05, borderRightWidth: 0.1}}>
        <View style={{flex: 1, marginLeft: 43}}>
              <Text style={{justifyContent: 'center', alignItems: 'center', fontFamily: 'SF-Pro-Rounded_regular', color: '#ADAAAA', fontSize: 9}}>
                EMAIL
                </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={require('../../../assets/images-authentication/Mail.png')} style={{marginLeft: 10}} />
              <TextInput style={{height: '100%', flex : 1, marginLeft: 10, fontSize: 20}} 
                autoCapitalize={"sentences"}
                placeholder="Holder"
                />
        </View>
      </View>
      {/* Password */}
      <View style={{width: windowWidth - 60, height: 45, marginTop: 20, marginLeft: 20, borderRadius: 10,
       shadowColor: '#171717',backgroundColor: '#FFFFFF', flexDirection: 'column', borderStyle: "solid",
        borderBottomWidth: 0.05, borderTopWidth: 0.01, borderLeftWidth: 0.05, borderRightWidth: 0.1}}>
        <View style={{flex: 1, marginLeft: 43}}>
              <Text style={{justifyContent: 'center', alignItems: 'center', fontFamily: 'SF-Pro-Rounded_regular', color: '#ADAAAA', fontSize: 9}}>
                PASSWORD
                </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={require('../../../assets/images-authentication/key.jpg')} style={{marginLeft: 10}} />
              <TextInput style={{height: '100%', flex : 1, marginLeft: 14, fontSize: 20}} 
                autoCapitalize={"sentences"}
                placeholder="Holder"
                secureTextEntry={pwHidden? true : false}
                />
        </View>
      </View>
        {/* Forger Password? */}
        <View style={{ width: windowWidth - 60, height: 45,
         marginTop: 20, marginLeft: 20, borderRadius: 10}}>
          <TouchableOpacity>
          <Text style={{color: '#AED910', fontFamily: 'SF-Pro-Rounded_heavy', fontSize: 14, position: 'absolute', right: 0}}>
            Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        {/* Login button */}
        <View style={{}}>
            <TouchableOpacity style={{marginLeft: 190, marginRight: 30}}>
              <Button content='LOGIN' type='confirm' arrow={true}/>
            </TouchableOpacity>
        </View>
    </View>
    
  )
}

  const Footer = () => {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{fontFamily: 'SF-Pro-Rounded_regular'}}>Don't have any account? </Text>
        <TouchableOpacity>
        <Text style={{color: '#AED910', fontFamily: 'SF-Pro-Rounded_heavy'}}>Sign up</Text>
          </TouchableOpacity>  
        
      </View>
    )
  }