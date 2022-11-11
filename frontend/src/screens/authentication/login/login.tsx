import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'
import Alert from '../../../components/alert/Alert'

import Button from '../../../components/button/Button';
import InputAttribute from "../../../components/input/Input";
import styles from './styles';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SIGN_IN = 'SIGN_IN';
const GET_STATE = 'GET_STATE';

export default function Login({ navigation }){   
  const [page, setPage] = useState(SIGN_IN);
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [getEmail, setEmail] = useState('');
  const [pwHidden, setpwHidden] = useState(true);
  const [success, setSuccess] = React.useState<boolean>(false)
  const SignUp = () => {
    navigation.navigate('SignUp')
}
  const Caculate = () => {
    navigation.navigate('Caculate')
  }
  return(
    <>
     <Alert
        type='create_plan'
        title='Success'
        message='Log in success'
        visible={success}
        setVisible={setSuccess}
    />
    <View style={{width: '100%', height : '100%', backgroundColor: '#FFFFFF'}}>
      {/* Header */}
       <View style={{width: '100%', height : '40%'}}>
        {/* Logo  */}
       <SafeAreaView style={{flex: 1}}>
        <View style={{width: '100%', height: '30%'}}>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center', }}>
        <Image 
          source={require('../../../../assets/images-authentication/Logo.png' )} 
          />
        </View>
     </SafeAreaView> 
        </View> 

        {/* Body  */}
        <View style={{width: '100%', height: '50%'}}>
        <View style={{flex: 1}}>
          {/* Login title */}
          <View style={{width: '100%', height: '15%'}}>
            <Text style={styles.fontTitle}>
              Login
              </Text>
          </View>
      {/* Email */}
      <View style={styles.box}>
        <View style={{flex: 1, marginLeft: 43}}>
              <Text style={styles.titleBox}>
                EMAIL
                </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={require('../../../../assets/images-authentication/Mail.png')} style={{marginLeft: 10}} />
              <TextInput style={styles.hiddenTexbox} 
                autoCapitalize={"sentences"}
                placeholder="Holder"
                />
        </View>
      </View>
      {/* Password */}
      <View style={styles.box}>
        <View style={{flex: 1, marginLeft: 43}}>
              <Text style={styles.titleBox}>
                PASSWORD
                </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={require('../../../../assets/images-authentication/key.jpg')} style={{marginLeft: 10}} />
              <TextInput style={styles.hiddenTexbox2} 
                autoCapitalize={"sentences"}
                placeholder="Holder"
                secureTextEntry={pwHidden? true : false}
                />
        </View>
      </View>
        {/* Forger Password? */}
        <View style={styles.containerForgotPassword}>
          <TouchableOpacity>
          <Text style={styles.textForgotPassword}>
            Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        {/* Login button */}
        <View style={{}}>
            <TouchableOpacity style={{marginLeft: 190, marginRight: 30}} >
              <Button content='LOGIN' type='confirm' arrow={true} onPress={() => Caculate()}/>
            </TouchableOpacity>
        </View>
    </View>
        </View>
        <View style={{width: '100%', height: '10%'}}>
              <View style={styles.containerFooter}>
            <Text style={{fontFamily: 'SF-Pro-Rounded_regular'}}>Don't have any account? </Text>
            <TouchableOpacity onPress={() => {SignUp() 
                                    setSuccess(true)}}>
            <Text style={{color: '#AED910', fontFamily: 'SF-Pro-Rounded_heavy'}}>Sign up</Text>  
              </TouchableOpacity>  
            
          </View>
        </View>
    </View> 
    </>
    
    

)
}



