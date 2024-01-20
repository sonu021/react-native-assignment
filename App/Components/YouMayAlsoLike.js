import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Icon, Text, useTheme } from 'react-native-basic-elements'
import { Image } from 'react-native'
import { FONTS } from './Constants/Fonts'
import { useNavigation } from '@react-navigation/native'

const YouMayAlsoLike = ({ item }) => {
    const navigation = useNavigation()
    const colors = useTheme()
    return (
        <Card
            style={styles.card_style}
            onPress={() => navigation.navigate('DetailScreen', {
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image
            })}
        >
            <Image
                source={{ uri: item?.image }}
                style={styles.image_style}
                resizeMode='contain'

            />
            <View
                style={{
                    paddingHorizontal: 10
                }}
            >
                <Text
                    numberOfLines={2}
                    style={styles.product_name}
                >{item.title}</Text>
                <Text
                    style={styles.price_txt}
                >₹ {item.price}</Text>
                <Text
                    numberOfLines={2}
                    style={{
                        ...styles.desc_txt,
                        color: colors.borderColor
                    }}
                >{item.description}</Text>

                <View style={styles.StarRating}>
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <Icon
                                name='star'
                                type='Entypo'
                                color={'#FF991F'}
                                size={12}
                            />
                        )
                    })}
                    <Text
                        style={{
                            ...styles.reviews_txt,
                        }}>
                        (143)
                    </Text>
                </View>
            </View>
        </Card>
    )
}

export default YouMayAlsoLike

const styles = StyleSheet.create({
    card_style: {
        padding: 0,
        marginBottom: 10,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 0,
        width: 200,
        marginTop:5,
        elevation:2
    },
    image_style: {
        height: 200,
        width: 200
    },
    desc_txt: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        paddingBottom: 5,
        maxWidth: '90%'
    },
    product_name: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        paddingTop: 5
    },
    price_txt: {
        fontFamily: FONTS.medium,
        fontSize: 12
    },
    StarRating: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5
    },
    reviews_txt: {
        fontFamily: FONTS.regular,
        fontSize: 10,
        // marginHorizontal: 5,
    },
})