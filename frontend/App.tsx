import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Navbar from './src/components/navbar/Navbar'
import Card from './src/components/card/Card'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card
                    cardStyle={3}
                    name='Food name'
                    body={{
                        description: 'This dish is created by ThoaiLe, an Asia chef. He want to create a dish that not only good for your health but also easy to do',
                        calories: 1200,
                        protein: 400,
                        fat: 20,
                        carb: 210
                    }}
                    imgSrc='../../../assets/food.jpg'
                    rate={4}
                ></Card>
            </View>
            <Navbar></Navbar>
        </>
        // <NavigationContainer>
        //     <Stack.Navigator>

        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}
