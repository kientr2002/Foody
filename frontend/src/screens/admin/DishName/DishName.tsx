import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '../../../components/card/Card'
import AccountCard from '../../../components/accountcard/AccountCard'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'

export default function DishName() {
    return (
        <>
            <View
                style={{
                    flex: 4,
                    marginTop: 70,
                    backgroundColor: '#BBBBBB'
                }}
            >
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingLeft: 30,
                    paddingRight: 30
                }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            fontFamily: 'SF-Pro-Rounded_bold',
                            fontSize: 17,
                            color: '#000000'
                        }}>
                        Recipe
                    </Text>

                </View>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            fontFamily: 'SF-Pro-Rounded_bold',
                            fontSize: 17,
                            color: '#000000'
                        }}>
                        About
                    </Text>
                </View>
            </View >

            {/* Recipe */}
            { /* <View
                style={{
                    flex: 6,
                    paddingLeft: 30,
                    paddingRight: 30
                }}>
                <ScrollView>
                    <View
                    >
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000'
                            }}>
                            Step 1
                        </Text>
                        <View
                            style={{
                                marginTop: 10,
                                width: '100%',
                                height: 162,
                                backgroundColor: '#BBBBBB'
                            }}>
                        </View>
                    </View>

                    <View
                    >
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000'
                            }}>
                            Step 1
                        </Text>
                        <View
                            style={{
                                marginTop: 10,
                                width: '100%',
                                height: 162,
                                backgroundColor: '#BBBBBB'
                            }}>
                        </View>
                    </View>

                    <View
                    >
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000'
                            }}>
                            Step 1
                        </Text>
                        <View
                            style={{
                                marginTop: 10,
                                width: '100%',
                                height: 162,
                                backgroundColor: '#BBBBBB'
                            }}>
                        </View>
                    </View>

                    <View
                    >
                        <Text
                            style={{
                                fontFamily: 'SF-Pro-Rounded_bold',
                                fontSize: 17,
                                color: '#000000'
                            }}>
                            Step 1
                        </Text>
                        <View
                            style={{
                                marginTop: 10,
                                width: '100%',
                                height: 162,
                                backgroundColor: '#BBBBBB'
                            }}>
                        </View>
                    </View>
                </ScrollView>
            </View> */}

            {/* About */}
            <View
                style={{
                    flex: 6,
                    paddingLeft: 30,
                    paddingRight: 30
                }}>
                <ScrollView>
                    {/* Nutries */}
                    <View
                        style={{
                            backgroundColor: '#MMMMMM'
                        }}>
                        {/* Nutries */}
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'SF-Pro-Rounded_bold',
                                    fontSize: 17,
                                    color: '#000000'
                                }}>Nutries</Text>
                        </View>
                        {/* Calories */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    backgroundColor: '#E8DF07'
                                }}>
                                <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000',
                                        marginRight: 20
                                    }}>
                                    Calories
                                </Text>
                            </View>
                            <View>
                                {/* <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000'
                                    }}>
                                    150
                                </Text> */}
                            </View>
                        </View>

                        {/* Fat */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    backgroundColor: '#E8DF07'
                                }}>
                                <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000',
                                        marginRight: 20
                                    }}>
                                    Fat
                                </Text>
                            </View>
                            <View>
                                {/* <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000'
                                    }}>
                                    150
                                </Text> */}
                            </View>
                        </View>

                        {/* Protein */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    backgroundColor: '#E8DF07'
                                }}>
                                <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000',
                                        marginRight: 20
                                    }}>
                                    Protein
                                </Text>
                            </View>
                            <View>
                                {/* <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000'
                                    }}>
                                    150
                                </Text> */}
                            </View>
                        </View>

                        {/* Carb */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}>
                            <View
                                style={{
                                    backgroundColor: '#E8DF07'
                                }}>
                                <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000',
                                        marginRight: 20
                                    }}>
                                    Carb
                                </Text>
                            </View>
                            <View>
                                {/* <Text
                                    style={{
                                        fontFamily: 'SF-Pro-Rounded_regular',
                                        fontSize: 17,
                                        color: '#000000'
                                    }}>
                                    150
                                </Text> */}
                            </View>
                        </View>
                    </View>

                    {/* Description */}
                    <View>
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'SF-Pro-Rounded_bold',
                                    fontSize: 17,
                                    color: '#000000'
                                }}>
                                Description
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontFamily: 'SF-Pro-Rounded_regular',
                                    fontSize: 17,
                                    color: '#000000'
                                }}>
                                It is a long established fact that a reader will be distracted by the readable content of a page
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using 'Content here, content here', making it look like
                                readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                                purpose (injected humour and the like).
                            </Text>
                        </View>
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
                        content='DELETE'
                        type='error'
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                    <Button
                        content='EDIT'
                        type='confirm'
                    />
                </View>
            </View >
        </>
    )
}