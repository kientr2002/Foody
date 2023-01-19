import { DefaultTheme } from '@react-navigation/native'
import { color } from './basic'

const FoodyLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: color.white,
    },
}

export { FoodyLightTheme }
