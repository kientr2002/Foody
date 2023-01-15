import * as React from 'react'
import CommentCard from './CommentCard'
import CommentInput, { CommentInputAttribute } from './CommentInput'

type CommentCmp = React.FunctionComponent & {
    Input: React.FunctionComponent<CommentInputAttribute>
    Card: React.FunctionComponent
}

const Comment: CommentCmp = ({ children }: any): JSX.Element => <>{children}</>
Comment.Input = CommentInput
Comment.Card = CommentCard

export default Comment
