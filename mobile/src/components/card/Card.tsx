import * as React from 'react'
import FavoriteCard, { FavoriteCardAttribute } from './FavoriteCard'
import Horizontal from './Horizontal'
import LargeVertical from './LargeVertical'
import Nutrition from './Nutrition'
import SmallVertical, { SmallVerticalAttribute } from './SmallVertical'

type CardCmp = React.FunctionComponent & {
    SmallVertical: React.FunctionComponent<SmallVerticalAttribute>
    LargeVertical: React.FunctionComponent
    Horizontal: React.FunctionComponent
    Nutrition: React.FunctionComponent
    FavoriteCard: React.FunctionComponent<FavoriteCardAttribute>
}

const Card: CardCmp = ({ children }: any): JSX.Element => <>{children}</>
Card.SmallVertical = SmallVertical
Card.LargeVertical = LargeVertical
Card.Horizontal = Horizontal
Card.Nutrition = Nutrition
Card.FavoriteCard = FavoriteCard

export default Card
