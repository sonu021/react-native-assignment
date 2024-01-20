import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Card, Icon, Text } from 'react-native-basic-elements'
import { FONTS } from './Constants/Fonts'


const ProductCard = ({ item }) => {
    const navigation = useNavigation()
    const colors = useTheme()
    return (
        <Card
            shadow={true}
            style={styles.card_style}
            onPress={() => navigation.navigate('DetailScreen', {
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image
            })}>
            <View
                style={{
                    width: '30%'
                }}
            >
                <Image
                    source={{ uri: item?.image }}
                    style={styles.image_style}
                    resizeMode='contain'
                />
            </View>
            <View
                style={{
                    marginLeft: 10,
                    width: '60%'
                }}
            >
                <Text
                    style={styles.product_name}
                >{item.name}</Text>
                <Text
                    style={styles.price_txt}
                >₹ {item.price}</Text>
                <Text
                    numberOfLines={3}
                    style={styles.desc_txt}
                >{item.description}</Text>

                <View style={styles.StarRating}>
                    {[1, 2, 3, 4, 5].map((it, id) => {
                        return (
                            <Icon
                                key={id}
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
                            color: colors.primaryFontColor,
                        }}>
                        (143)

                    </Text>
                </View>

            </View>

        </Card>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card_style: {
        padding: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 115,
        marginHorizontal: 5,
        marginTop: 2,
        elevation:2
    },
    image_style: {
        flex: 1,
        borderRadius: 10,
    },
    desc_txt: {
        fontFamily: FONTS.regular,
        fontSize: 8,
        paddingBottom: 5,
        maxWidth: '90%'
    },
    product_name: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        paddingTop: 5
    },
    StarRating: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },
    reviews_txt: {
        fontFamily: FONTS.regular,
        fontSize: 10,
    },
    price_txt: {
        fontFamily: FONTS.medium,
        fontSize: 12
    }
})