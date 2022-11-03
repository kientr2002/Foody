import * as React from 'react'
import { View, Image, Text, Pressable, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'
import Button from '../button/Button'

export interface ReviewCardAttribute {
    avatarSrc?: string,
    username: string,
    rate: number,
    body: string,
}

export interface ReviewInputAttribute {
    rate: number
    setRate: (rate:number) => void
    comment: string
    setComment: (comment:string) => void
    handleSubmit: (rate:number, comment:string) => void
}

function Stars({ rate }:any) {
    let starArr:string[] = []
    for (let i=0; i < 5; i++) {
        if (i < rate)
            starArr.push('star')
        else 
            starArr.push('staro')
    }

    return (
        <View style={styles.starContainer}>
            {starArr.map((element, i) => (
                <AntDesign 
                    key={i}
                    name={element === 'star' ? "star" : "staro"} 
                    size={20} 
                    style={styles.star} 
                />
            ))}
        </View>
    )
}

export function ReviewInput({rate, setRate, comment, setComment, handleSubmit}:ReviewInputAttribute) {
    return (
        <View style={styles.reviewInput}>
            <View style={styles.input}>
                <View style={styles.starContainer}>
                    <Pressable
                        onPress={() => setRate(1)}
                    >
                        <AntDesign
                            name={rate >= 1 ? 'star' : 'staro'} 
                            size={20} 
                            style={styles.star} 
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => setRate(2)}
                    >
                        <AntDesign
                            name={rate >= 2 ? 'star' : 'staro'}  
                            size={20} 
                            style={styles.star} 
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => setRate(3)}
                    >
                        <AntDesign
                            name={rate >= 3 ? 'star' : 'staro'}  
                            size={20} 
                            style={styles.star} 
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => setRate(4)}
                    >
                        <AntDesign
                            name={rate >= 4 ? 'star' : 'staro'}  
                            size={20} 
                            style={styles.star} 
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => setRate(5)}
                    >
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

export function ReviewCard({ avatarSrc, username, rate, body}:ReviewCardAttribute) {
    return (
        <View style={styles.reviewCard}>
            <View style={styles.reviewCardTitle}>
                <Image 
                    source={require('../../../assets/icon.png')}
                    style={styles.avatar}
                />
                <Text style={styles.username}>{username}</Text>
                <Stars rate={rate}/>
            </View>
            <Text
                style={styles.reviewCardBody}
            >
                {body}
            </Text>
        </View>
    )
}
