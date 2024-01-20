import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar } from 'react-native-basic-elements'
import { FONTS } from '../Constants/Fonts'
import { useNavigation } from '@react-navigation/native'

const BackHeader = ({title}) => {
  const navigation = useNavigation()
  return (
    <AppBar.Back 
    title={title}
    titlePosition='left'
    titleStyle={styles.title_style}
    onLeftIconPress={() => navigation.goBack()}
    />
  )
}

export default BackHeader

const styles = StyleSheet.create({
    title_style: {
        fontFamily: FONTS.bold,
        fontSize: 16
    }
})