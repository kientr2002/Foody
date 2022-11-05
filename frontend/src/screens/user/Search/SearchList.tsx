import * as React from 'react'
import axios from 'axios'
import { ScrollView, StyleSheet, View } from 'react-native'
import AnimatedLottieView from 'lottie-react-native'
import Card from '../../../components/card/Card'
import Input from '../../../components/input/Input'
import { Food } from '../../../util/types'

export default function SearchList({ navigation }:any) {
    const [searchKeyWord, setSearchKeyWord] = React.useState<string>('')
    const [foods, setFoods] = React.useState< Food[] >([])
    const [result, setResult] = React.useState< Food[] >([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/food')
            .then(response => {
                if (response)
                    setFoods(response.data)
            })
    }, [])

    React.useEffect(() => {
        if (searchKeyWord === '')
            setResult([])
        else {
            let arr : Food[] | undefined = []
            arr = foods.filter((food) => {
                if (food.name.includes(searchKeyWord))
                    return food
            })
            if (arr) {
                setResult(arr)
            }
        }
    }, [searchKeyWord])

    const handleOnPress = (obj:any) => {
        navigation.navigate(
            'Food Detail', 
            obj
        )
    }

    return (
        <View>
            <View style={styles.searchInput}>
                <Input 
                   type='search'
                   focus 
                   value={searchKeyWord}
                   setValue={setSearchKeyWord}
                />
            </View>

            {result.length !== 0 ?

                <ScrollView contentContainerStyle={styles.resultList}>
                    {result.map((food:Food, i:number) => (
                        <Card
                            key={i}
                            cardStyle={3}
                            name={food.name}
                            body={food.body}
                            imgSrc={food.imgSrc}
                            rate={food.rate}
                            onPress={() => handleOnPress(food)}
                        />
                    ))}
                </ScrollView>
                :
                <AnimatedLottieView
                    style={styles.notFound}
                    source={require('../../../../assets/animation/search.json')}
                    autoPlay
                    loop
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    resultList: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFound: {
        width: 300,
        marginLeft: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})