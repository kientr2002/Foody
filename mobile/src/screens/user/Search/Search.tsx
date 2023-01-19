import { NativeStackScreenProps } from '@react-navigation/native-stack'
import AnimatedLottieView from 'lottie-react-native'
import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import searchAnimated from '../../../../assets/animation/search.json'
import { SearchStackParamList } from '../../../util/navigator'
import styles from './styles'

import Input from '../../../components/input/Input'

type Props = NativeStackScreenProps<SearchStackParamList>

const Search = ({ navigation }: Props): JSX.Element => {
    return (
        <View>
            <View style={styles.searchInput}>
                <Input
                    type='search'
                    focus
                    value={'searchKeyWord'}
                    setValue={undefined}
                />
            </View>

            {false ? (
                <ScrollView
                    contentContainerStyle={styles.resultList}
                ></ScrollView>
            ) : (
                <AnimatedLottieView
                    style={styles.notFound}
                    source={searchAnimated}
                    autoPlay
                    loop
                />
            )}
        </View>
    )
}

export default Search
