import * as React from 'react'
import { useFonts } from 'expo-font'
import UserContext, { UserProvider } from './src/context/UserContext'
import Index from './src/screens/Index'

export default function App() {
    //load font
    const [fontLoaded] = useFonts({
        'SF-Pro-Rounded_heavy': require('./assets/font/SF-Pro-Rounded-Heavy.otf'),
        'SF-Pro-Rounded_bold': require('./assets/font/SF-Pro-Rounded-Bold.otf'),
        'SF-Pro-Rounded_semibold': require('./assets/font/SF-Pro-Rounded-Semibold.otf'),
        'SF-Pro-Rounded_medium': require('./assets/font/SF-Pro-Rounded-Medium.otf'),
        'SF-Pro-Rounded_regular': require('./assets/font/SF-Pro-Rounded-Regular.otf'),
    })
    
    if (!fontLoaded)
        return null 
        
    return (
        <UserProvider>
            <Index/>
        </UserProvider>
    )
}





