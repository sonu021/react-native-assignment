import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, AppButton, CheckBox, Text } from 'react-native-basic-elements';
import { FONTS } from '../Constants/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../Redux/reducer/Product';
import LinearGradient from 'react-native-linear-gradient';

const PriceComponent = ({ handleCancel }) => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.Product);
    const [SelectedPrice, setSelectedPrice] = useState({})


    const data = [
        {
            id: 1,
            min: 0,
            max: 199
        },
        {
            id: 2,
            min: 200,
            max: 599,
        },
        {
            id: 3,
            min: 600,
            max: 1000,
        }
    ]
    const selectPrice = () => {
        if (SelectedPrice.id) {
            let data = products.filter(product =>
                product.price >= SelectedPrice.min && product.price <= SelectedPrice.max
            )
            dispatch(setProducts(data));
        }
    }
    // {min:10,max:100}
    return (
        <>
            {data.map((item, index) => {
                return (
                    <View
                        style={styles.horizontal_View}
                    >
                        <CheckBox
                            checked={SelectedPrice.id == item.id}
                            onChange={(val) => setSelectedPrice(item)}
                            size={20}
                            containerStyle={styles.check_box}
                            activeColor={'#7FC7D9'}
                            inactiveColor={'#DCF2F1'}
                        />
                        <Text
                            style={styles.price_txt}
                        >₹ {item.min} - ₹ {item.max} </Text>

                    </View>
                )
            })}
            <TouchableOpacity
                onPress={() => {
                    selectPrice()
                    handleCancel()
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#365486', '#7FC7D9', '#DCF2F1',]}
                    style={styles.app_btn_style}
                >
                    <Text
                        style={styles.app_txt_style}
                    >Apply</Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    )
}

export default PriceComponent

const styles = StyleSheet.create({
    horizontal_View: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    check_box: {
        borderColor: '#7FC7D9',
    },
    price_txt: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        paddingHorizontal: 10
    },
    app_btn_style: {
        backgroundColor: '#7FC7D9',
        marginHorizontal: 0,
        marginVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    app_txt_style: {
        fontFamily: FONTS.medium,
        fontSize: 14
    }
})