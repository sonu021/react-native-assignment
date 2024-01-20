import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppBar, Icon } from 'react-native-basic-elements'
import { FONTS } from '../Constants/Fonts'
import { useNavigation } from '@react-navigation/native'

const HomeHeader = ({ toggleModal }) => {
    const navigation = useNavigation()
    return (
        <AppBar
            title='Hello Jhon'
            titlePosition='left'
            titleStyle={styles.title_style}
            barStyle='dark-content'
            rightActions={[
                {
                    icon:
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddProduct')}
                        >
                            <Icon
                                name='add-circle-sharp'
                                type='Ionicon'
                                color={'#7FC7D9'}
                                style={{
                                    marginRight:10
                                }}
                                size={25}
                            />
                        </TouchableOpacity>
                },
                {
                    icon:
                        <TouchableOpacity
                            onPress={toggleModal}
                        >
                            <Icon
                                name='filter'
                                type='MaterialCommunityIcon'
                                color={'#7FC7D9'}
                                size={25}
                            />
                        </TouchableOpacity>
                }
            ]}
        />
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    title_style: {
        fontFamily: FONTS.bold,
        fontSize: 16
    },
})