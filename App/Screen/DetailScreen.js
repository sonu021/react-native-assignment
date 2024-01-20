import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Icon, Text, useTheme, } from 'react-native-basic-elements'
import BackHeader from '../Components/Header/BackHeader'
import { FONTS } from '../Components/Constants/Fonts'
import YouMayAlsoLike from '../Components/YouMayAlsoLike'

const { width } = Dimensions.get('screen')

const DetailScreen = (props) => {
  const item = props.route.params
  const colors = useTheme()
  const [allProduct, setAllProduct] = useState([])
  const [fullPageLoader, setfullPageLoader] = useState(false)

  useEffect(() => {
    getAllProduct()
  }, [])

  

  const getAllProduct = async () => {
    try {
      setfullPageLoader(true)
      const response = await fetch('https://fakestoreapi.com/products')
      const jsonData = await response.json()
      setAllProduct(jsonData)
      setfullPageLoader(false)
    }
    catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Container>
      {fullPageLoader ?
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={styles.circle_view}
          >
            <ActivityIndicator
              size={'large'}
              color={'#7FC7D9'}
            />
          </View>

        </View>
        :
        <>
          <BackHeader
            title={'Details Screen'}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View
              style={styles.main_view}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.image_style}
                resizeMode='contain'
              />

              <Text
                style={styles.product_name}
              >{item.name}</Text>
              <Text
                style={styles.price_txt}
              >₹{item.price}</Text>

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

              <Text
                style={styles.desc_txt}
              >{item.description}</Text>

              <Text style={styles.title_txt}>You May Also Like</Text>

            </View>
            {console.log('allProduct',allProduct)}
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={allProduct}
              contentContainerStyle={{
                paddingHorizontal: 10
              }}
              renderItem={({ item, index }) => {
                return (
                  <YouMayAlsoLike
                    item={item}
                  />
                )
              }}
            />
          </ScrollView>
        </>
      }
    </Container>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  main_view: {
    marginHorizontal: 15,
    marginVertical: 5
  },
  image_style: {
    height: 200,
    width: width - 30,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 5
  },
  desc_txt: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    paddingBottom: 2,
  },
  product_name: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    paddingTop: 5
  },
  toggleButton: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: 'red'
  },
  price_txt: {
    fontFamily: FONTS.medium,
    fontSize: 13
  },
  StarRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviews_txt: {
    fontFamily: FONTS.regular,
    fontSize: 10,
  },
  title_txt: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    paddingVertical: 10
  },
  circle_view: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 50
  }
})