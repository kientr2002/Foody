import React from "react"
import axios from 'axios'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ScrollView, StyleSheet } from "react-native"
import { FavoriteStackParamList, Food } from "../../../util/types"
import Card from "../../../components/card/Card"

type Props = NativeStackScreenProps<FavoriteStackParamList>

export default function FavoriteList({ route, navigation }:Props) {
    const [foods, setFoods] = React.useState< Array<Food> >([])
    React.useEffect(() => {
        axios.get('http://localhost:3000/favorite')
            .then(response => {
                if (response)
                    setFoods(response.data)
            })
    }, [])

    const handleOnPress = (obj:any) => {
        navigation.navigate(
            'Food Detail',
            obj
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {foods?.map((food:Food, i:number) => (
                <Card
                    key={i}
                    cardStyle={2}
                    name={food.name}
                    body={food.body}
                    imgSrc={food.imgSrc}
                    rate={food.rate}
                    onPress={() => handleOnPress(food)}
                />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingTop: 20,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})