import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '../../../components/card/Card'
import AccountCard from '../../../components/accountcard/AccountCard'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
export default function AddEditDish() {
    return (
        <>
            <View
                style={{
                    flex: 4,
                    backgroundColor: '#BBBBBB'
                }}
            >
            </View>

            <View
                style={{
                    flex: 6,
                    paddingLeft: 15,
                    paddingRight: 15,
                    marginBottom: 20
                }}>
                <ScrollView>
                    {/* Dish name */}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 20,
                                color: '#000000'
                            }}>
                            Dish name
                        </Text>
                        <Input
                            type=''
                            focus={false}
                        />
                    </View>

                    {/* Calorioes */}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 20,
                                color: '#000000'
                            }}>
                            Calories
                        </Text>
                        <Input
                            type=''
                            focus={false}
                        />
                    </View>
                    {/* Protein-Fat-Carb */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20

                        }}>
                        <View
                            style={{
                                flex: 1
                            }}>
                            <Text
                                style={{
                                    fontFamily: 'SF-Pro-Rounded_bold',
                                    fontSize: 20,
                                    color: '#000000'
                                }}>
                                Protein
                            </Text>
                            <Input
                                type=''
                                focus={false}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                marginLeft: 20,
                                marginRight: 20
                            }}>
                            <Text
                                style={{
                                    fontFamily: 'SF-Pro-Rounded_bold',
                                    fontSize: 20,
                                    color: '#000000'
                                }}>
                                Fat
                            </Text>
                            <Input
                                type=''
                                focus={false}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}>
                            <Text
                                style={{
                                    fontFamily: 'SF-Pro-Rounded_bold',
                                    fontSize: 20,
                                    color: '#000000'
                                }}>
                                Carb
                            </Text>
                            <Input
                                type=''
                                focus={false}
                            />
                        </View>
                    </View>

                    {/* Description */}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 20,
                                color: '#000000'
                            }}>
                            Description
                        </Text>
                        <Input
                            type=''
                            focus={false}
                        />
                    </View>
                    {/* Step 1 */}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 20,
                                color: '#000000'
                            }}>
                            Step 1
                        </Text>

                        <Input
                            type=''
                            focus={false}
                        />


                    </View>
                    {/* Step 2 */}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 20,
                                color: '#000000'
                            }}>
                            Step 2
                        </Text>
                        <Input
                            type=''
                            focus={false}
                        />
                    </View>
                    {/* Step 3 */}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 20,
                                color: '#000000'
                            }}>
                            Step 3
                        </Text>
                        <Input
                            type=''
                            focus={false}
                        />
                    </View>

                    {/* Step 4 */}
                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 20,
                                color: '#000000'
                            }}>
                            Step 4
                        </Text>
                        <Input
                            type=''
                            focus={false}
                        />
                    </View>
                </ScrollView>

            </View >

            {/* Button DELETE and EDIT */}
            < View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 30,
                    paddingRight: 30
                }
                }>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                    <Button
                        content='CANCEL'
                        type='error'
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                    <Button
                        content='SUBMIT'
                        type='confirm'
                    />
                </View>
            </View >
        </>
    )
}