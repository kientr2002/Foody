import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC,Component, useState } from 'react';
import Select from 'react-select';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity,StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'
import Alert from '../../../components/alert/Alert'
import Button from '../../../../src/components/button/Button';
import styles from '../../../components/input/styles';
import color from "../../../../src/styles/color"
import Input from '../../../components/input/Input';
import InputAttribute from "../../../components/input/Input";
import styles_caculate from './styles'
import Dropdown from './dropdown/Dropdown'


export default function Caculate({navigation, string}){
  const [success, setSuccess] = React.useState<boolean>(false)
  const SignUp = () => {
    navigation.navigate('SignUp')
}

  const [selected, setSelected] = useState(undefined);
  const [mood, setMood] = useState("")
  const data = [ 
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];
  return(<>
  <Alert
        type='create_plan'
        title='Success'
        message='Your TDEE has been caculated'
        visible={success}
        setVisible={setSuccess}
    />
    <View style= {styles_caculate.background}>
      {/* Header  */}
        <View style= {styles_caculate.header}>
          {/* Icon Come Back */}
        <TouchableOpacity onPress={() => SignUp()}>
          <Image source={require('../../../../assets/images-authentication/Vector-Left.png')} style={{marginTop: '12%'}} />
          </TouchableOpacity>
        </View>
        {/* Body  */}
        <View style= {styles_caculate.Body}>
              {/* Title   */}
              <View style={styles_caculate.Title}>
                <Text style={styles_caculate.fontTitle}>
                  Update you status
                </Text>          
              </View>
              <View style={styles_caculate.space}></View>
              {/* Weight  */}
              <View style={styles_caculate.Entity}>
                <Input type='weight' focus={false}/>
              </View >
              <View style={styles_caculate.space}></View>
              {/* Height  */}
              <View style={styles_caculate.Entity}>
                <Input type='height' focus={false}/>
              </View>

              <View style={styles_caculate.space}></View>
             {/* Activity */}
              <View style={styles_caculate.Entity}>
              <Dropdown label="Activity" data={data} onSelect={setSelected} />
              </View>
              <View style={styles_caculate.space}></View>
              {/* Choose your target  */}
                {/* Title  */}
              <View style={styles_caculate.Text }>
                <Text style={styles_caculate.fontText}>
                  Choose your target
                </Text>
              </View>
              <View style={styles_caculate.litlespace}></View>
                {/* Increase weight  */}
                <View style={styles_caculate.LittleEntity}>
                  {['Increase Weight','Reduce Weight','Keep This Weight'].map(feeling =>(
                    <View key={feeling} style={styles_caculate.chooseButton}>
                     
                    <TouchableOpacity style={styles_caculate.outter} onPress={() => setMood(feeling)}>
                        { mood === feeling && <View style={styles_caculate.inner}/>}
                      </TouchableOpacity>
                      <Text style={styles_caculate.textChooseButton}>{feeling} </Text>
                    </View>
                  ))}
                </View>
                <View style={styles_caculate.litlespace}></View>

            
        </View>
        {/* Footer  */}
        <View style= {styles_caculate.Footer}>
            {/* Button  */}
            <View style={styles_caculate.Button}>
              <Button content='CACULATE TDEE' type='confirm' arrow={true} onPress={() =>  {setSuccess(true)  
                navigation.goBack()} } />
              </View>
        </View>
    </View>
    </>
  )
}