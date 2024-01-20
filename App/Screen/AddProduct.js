import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Container } from 'react-native-basic-elements'
import BackHeader from '../Components/Header/BackHeader'
import LinearGradient from 'react-native-linear-gradient'
import { FONTS } from '../Components/Constants/Fonts'
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux'
import { addProducts } from '../Redux/reducer/Product'

const AddProduct = ({navigation}) => {
    const dispatch = useDispatch()
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const onSubmit = () => {
        if (productName == '') {
            Toast.show('Please enter product name', Toast.SHORT);
            return
        }
        if (description == '') {
            Toast.show('Please enter description', Toast.SHORT);
            return
        }
        if (price == '') {
            Toast.show('Please enter price', Toast.SHORT);
            return
        }
        if (image == '') {
            Toast.show('Please enter Image', Toast.SHORT);
            return
        }

        let arr = {
            name: productName,
            description: description,
            price: price,
            image: image,
            upc: new Date().getTime()
        }
        dispatch(addProducts(arr))
        Toast.show('Product Add successfuly', Toast.SHORT);
        navigation.navigate('ListScreen')

    }
    return (
        <Container>
            <BackHeader
                title={'Add Product'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.main_view}
            >
                <AppTextInput
                    placeholder='Enter Product Name'
                    inputContainerStyle={styles.inputContainerStyle}
                    style={styles.app_txt_style}
                    value={productName}
                    onChangeText={(val) => setProductName(val)}
                />
                <AppTextInput
                    placeholder='Enter Description'
                    inputContainerStyle={styles.inputContainerStyle}
                    style={styles.app_txt_style}
                    mainContainerStyle={{
                        marginVertical: 10
                    }}
                    value={description}
                    onChangeText={(val) => setDescription(val)}
                />
                <AppTextInput
                    placeholder='Enter Price'
                    keyboardType='number-pad'
                    inputContainerStyle={styles.inputContainerStyle}
                    style={styles.app_txt_style}
                    value={price}
                    onChangeText={(val) => setPrice(val)}
                />

                <AppTextInput
                    placeholder='Add Image here'
                    inputContainerStyle={styles.inputContainerStyle}
                    style={styles.app_txt_style}
                    mainContainerStyle={{
                        marginVertical: 10
                    }}
                    value={image}
                    onChangeText={(val) => setImage(val)}
                />

                <TouchableOpacity
                    onPress={onSubmit}
                >
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['#365486', '#7FC7D9', '#DCF2F1',]}
                        style={styles.app_btn_style}
                    >
                        <Text
                            style={styles.submit_txt_style}
                        >Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </Container>
    )
}

export default AddProduct

const styles = StyleSheet.create({
    main_view: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    inputContainerStyle: {
        width: '100%',
        paddingHorizontal: 10,
    },
    app_txt_style: {
        fontWeight: '500',
        fontSize: 12
    },
    app_btn_style: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    submit_txt_style: {
        fontFamily: FONTS.bold,
        fontSize: 15,
        color: '#0F1035'
    }
})