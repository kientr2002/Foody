import { createStackNavigator } from '@react-navigation/stack';

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Login from './login/login';
import SignUp from './signup/signup'
import Caculate from './caculate/caculate'
import { NavigationContainer } from '@react-navigation/native';

import color from '../../styles/color'
const Stack = createStackNavigator();

function Authentication() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Caculate" component={Caculate} />
    </Stack.Navigator>
  );
}

const MainAuthentication = () => {
  return(
    <NavigationContainer>
        <Authentication></Authentication>
    </NavigationContainer>
  )
}

export default MainAuthentication;