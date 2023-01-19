import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native'
import Card from '../../../components/card/Card'
import { color, text } from '../../../styles/basic'
import { HomeStackParamList } from '../../../util/navigator'
import styles from './styles'

type Props = NativeStackScreenProps<HomeStackParamList>

const HorizontalWrapper = ({ navigation }: any): JSX.Element => {
    return (
        <View>
            <View style={styles.title}>
                <Text
                    style={[text.semiBold, text.color_black, { fontSize: 22 }]}
                >
                    Breakfast
                </Text>
                <Pressable onPress={() => navigation.navigate('More Food')}>
                    <Text
                        style={[
                            text.medium,
                            text.color_gray,
                            text.size_extraSmall,
                        ]}
                    >
                        More
                    </Text>
                </Pressable>
            </View>
            <ScrollView
                contentContainerStyle={styles.mealContainer}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <Card.SmallVertical
                    onPress={() => navigation.navigate('Food Detail')}
                />
                <Card.SmallVertical
                    onPress={() => navigation.navigate('Food Detail')}
                />
            </ScrollView>
        </View>
    )
}

const Home = ({ route, navigation }: Props): JSX.Element => {
    return (
        <>
            {false ? (
                <View style={styles.loadingScreen}>
                    <ActivityIndicator size='large' color={color.primary} />
                </View>
            ) : (
                <ScrollView style={styles.container}>
                    <HorizontalWrapper navigation={navigation} />
                    <HorizontalWrapper navigation={navigation} />
                    <HorizontalWrapper navigation={navigation} />
                </ScrollView>
            )}
        </>
    )
}

export default Home
