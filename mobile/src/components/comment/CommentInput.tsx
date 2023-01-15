import { AntDesign } from '@expo/vector-icons'
import * as React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import Button from '../button/Button'
import styles from './styles'

export type CommentInputAttribute = {
    rate: number
    setRate: (rate: number) => void
    comment: string
    setComment: (comment: string) => void
    handleSubmit: (rate: number, comment: string) => void
}

const CommentInput = ({
    rate,
    setRate,
    comment,
    setComment,
    handleSubmit,
}: CommentInputAttribute): JSX.Element => {
    return (
        <View style={styles.reviewInput}>
            <View style={styles.input}>
                <View style={styles.starContainer}>
                    <Pressable onPress={() => setRate(1)}>
                        <AntDesign
                            name={rate >= 1 ? 'star' : 'staro'}
                            size={20}
                            style={styles.star}
                        />
                    </Pressable>
                    <Pressable onPress={() => setRate(2)}>
                        <AntDesign
                            name={rate >= 2 ? 'star' : 'staro'}
                            size={20}
                            style={styles.star}
                        />
                    </Pressable>
                    <Pressable onPress={() => setRate(3)}>
                        <AntDesign
                            name={rate >= 3 ? 'star' : 'staro'}
                            size={20}
                            style={styles.star}
                        />
                    </Pressable>
                    <Pressable onPress={() => setRate(4)}>
                        <AntDesign
                            name={rate >= 4 ? 'star' : 'staro'}
                            size={20}
                            style={styles.star}
                        />
                    </Pressable>
                    <Pressable onPress={() => setRate(5)}>
                        <AntDesign
                            name={rate >= 5 ? 'star' : 'staro'}
                            size={20}
                            style={styles.star}
                        />
                    </Pressable>
                </View>
                <TextInput
                    style={styles.comment}
                    value={comment}
                    onChangeText={setComment}
                    placeholder='Write your review'
                    multiline
                />
            </View>
            <Button
                type='confirm'
                comment
                onPress={() => handleSubmit(rate, comment)}
            />
        </View>
    )
}

export default CommentInput
