import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../Constants/Fonts'
import PriceComponent from '../Filter/PriceComponent'
import IndoorComponent from '../Filter/IndoorComponent'

const { height, width } = Dimensions.get('screen')
const FilterModal = ({ handleCancel }) => {
    const colors = useTheme()
    const [select, setSelect] = useState(true)
    return (
        <View>
            <TouchableOpacity
                onPress={handleCancel}
                style={styles.cross_button_view}
            >
                <Icon
                    name='cross'
                    type='Entypo'
                    color={'#fff'}
                    size={30}
                />
            </TouchableOpacity>
            <View
                style={{
                    ...styles.modal_view,
                    backgroundColor: colors.pageBackgroundColor
                }}
            >
                <Text style={styles.filter_txt}>Filter</Text>
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    {/* Left View */}
                    <View
                        style={{
                            ...styles.left_side_view,
                            borderColor: colors.borderColor
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                ...styles.box_view,
                                backgroundColor: '#DCF2F1',
                            }}
                            onPress={() => setSelect(true)}
                        >
                            <View
                                style={styles.side_line}
                            />

                            <Text
                                style={styles.price_txt}
                            >Price</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Right View */}
                    <View
                        style={{
                            ...styles.right_side,
                            borderColor: colors.borderColor,
                        }}
                    >
                        {select ?
                            <PriceComponent
                                handleCancel={handleCancel}
                            />
                            :
                            null
                        }

                    </View>
                </View>

            </View>
        </View>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    modal_view: {
        height: height / 2.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    cross_button_view: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'center'
    },
    filter_txt: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    left_side_view: {
        width: width / 2.5,
        height: height,
        borderRightWidth: 0.5,
        borderTopWidth: 0.25,
    },
    box_view: {
        height: 45,

        justifyContent: 'center',
        alignItems: 'center'
    },
    price_txt: {
        fontFamily: FONTS.medium,
        fontSize: 12
    },
    side_line: {
        height: 35,
        width: 5,
        position: 'absolute',
        left: 0,
        backgroundColor: '#7FC7D9',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    right_side: {
        borderTopWidth: 0.25,
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15
    }
})