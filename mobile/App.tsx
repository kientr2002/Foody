import { useFonts } from 'expo-font'
import * as React from 'react'
import { Text, View } from 'react-native'
import Button from './src/components/button/Button'
import Favorite from './src/components/favorite/Favorite'

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
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Button
                type='confirm'
                content='Open'
                onPress={() => setVisible(true)}
            />
            {/* <Favorite.FavoriteHolder type='favorite' name='Favorite' /> */}
            <Favorite.Submenu visible={visible} setVisible={setVisible} />
        </View>
    )
}
