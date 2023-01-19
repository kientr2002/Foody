import * as React from 'react'
import { Food } from '../util/interface'

export interface UserContextInterface {
    isClickOnFavorite: boolean
    setIsClickOnFavorite: (a: boolean) => void
}
const UserContext = React.createContext<UserContextInterface>({
    isClickOnFavorite: false,
    setIsClickOnFavorite: () => {},
})

export function UserProvider({ children }: any) {
    const [isClickOnFavorite, setIsClickOnFavorite] =
        React.useState<boolean>(false)

    return (
        <UserContext.Provider
            value={{
                isClickOnFavorite,
                setIsClickOnFavorite,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
