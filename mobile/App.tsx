import { useFonts } from 'expo-font'
import * as React from 'react'
import { UserProvider } from './src/context/UserContext'
import UserView from './src/screens/user/UserView'

export default function App() {
    const [visible, setVisible] = React.useState(true)
    //load font
    const [fontLoaded, error] = useFonts({
        'SF-Pro-Rounded_heavy': require('./assets/font/SF-Pro-Rounded-Heavy.otf'),
        'SF-Pro-Rounded_bold': require('./assets/font/SF-Pro-Rounded-Bold.otf'),
        'SF-Pro-Rounded_semibold': require('./assets/font/SF-Pro-Rounded-Semibold.otf'),
        'SF-Pro-Rounded_medium': require('./assets/font/SF-Pro-Rounded-Medium.otf'),
        'SF-Pro-Rounded_regular': require('./assets/font/SF-Pro-Rounded-Regular.otf'),
    })

    if (!fontLoaded) {
        return null
    }

    return (
        <UserProvider>
            <UserView />
        </UserProvider>
    )
}
