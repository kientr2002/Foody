import * as React from 'react'
import { View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'

import Navbar from './src/components/navbar/Navbar'
import Card from './src/components/card/Card'
import Button from './src/components/button/Button'

const Stack = createNativeStackNavigator()

export default function App() {
    // load font
    const [fontLoaded] = useFonts({
        'SF-Pro-Rounded_heavy': require('./assets/font/SF-Pro-Rounded-Heavy.otf'),
        'SF-Pro-Rounded_bold': require('./assets/font/SF-Pro-Rounded-Bold.otf'),
        'SF-Pro-Rounded_semibold': require('./assets/font/SF-Pro-Rounded-Semibold.otf'),
        'SF-Pro-Rounded_medium': require('./assets/font/SF-Pro-Rounded-Medium.otf'),
        'SF-Pro-Rounded_regular': require('./assets/font/SF-Pro-Rounded-Regular.otf'),
    })

    React.useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync()
        }
        prepare()
    }, [])
    
    const onLayoutRootView = React.useCallback(async () => {
        if (fontLoaded) {
        await SplashScreen.hideAsync()
        }
    }, [fontLoaded])
    
    if (!fontLoaded)
        return null

    return (
        <>
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onLayout={onLayoutRootView}
            >
                {/* <Card
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
                /> */}
                <Button
                    content='LOGIN'
                    type='confirm'
                    arrow={false}
                />
            </View>
            <Navbar type='admin'></Navbar>
        </>
        // <NavigationContainer>
        //     <Stack.Navigator>

        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}
