import * as React from 'react'
import FavoriteHolder, { FavoriteHolderAttribute } from './FavoriteHolder'
import Submenu, { SubmenuAttribute } from './Submenu'

type FavoriteCmp = React.FunctionComponent & {
    FavoriteHolder: React.FunctionComponent<FavoriteHolderAttribute>
    Submenu: React.FunctionComponent<SubmenuAttribute>
}

const Favorite: FavoriteCmp = ({ children }: any): JSX.Element => (
    <>{children}</>
)
Favorite.FavoriteHolder = FavoriteHolder
Favorite.Submenu = Submenu

export default Favorite
