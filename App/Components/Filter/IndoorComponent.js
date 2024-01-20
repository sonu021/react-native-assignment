import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, CheckBox, Text, } from 'react-native-basic-elements';
import { FONTS } from '../Constants/Fonts';
import { useDispatch } from 'react-redux';
import { setCategoryFilter } from '../../Redux/reducer/Product';

const IndoorComponent = () => {
  const dispatch = useDispatch()
  const [indoor, setIndoor] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const filterData = [
    { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
    { id: 'pcmcat248700050021', name: 'Housewares' },
    { id: 'pcmcat303600050001', name: 'Household Batteries' },
    { id: 'abcat0208002', name: 'Alkaline Batteries' },
    { id: 'pcmcat113100050015', name: 'Carfi Instore Only' },
    { id: 'abcat0208006', name: 'Specialty Batteries' },
    { id: 'abcat0300000', name: 'Car Electronics & GPS' },
    {
      id: 'pcmcat165900050023',
      name: 'Car Installation Parts & Accessories'
    },
    { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
    { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
    { id: 'pcmcat165900050033', name: 'Dash Installation Kits' },
    { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    { id: 'pcmcat165900050032', name: 'Antennas & Adapters' },
    { id: 'pcmcat298100050010', name: 'In-Store Only' },
    { id: 'abcat0802000', name: 'Telephones & Communication' },
    { id: 'abcat0811011', name: 'Telephone Accessories' },
    { id: 'abcat0811012', name: 'Cordless Phone Batteries' },
    { id: 'abcat0302000', name: 'Car Audio' },
    { id: 'abcat0302034', name: 'Car Subwoofers & Enclosures' },
  ]
  const [selected, setSelected] = useState("")
  return (
    <ScrollView
    contentContainerStyle={{
      
    }}
    >
       <AppButton
        title='Apply'
        onPress={()=>{
          dispatch(setCategoryFilter(selected))
        }}
      />
      {filterData.map((item, index) => {
        return (
          <View
            style={styles.horizontal_View}
          >
            <CheckBox
              checked={selected== item.id}
              onChange={(val) => setSelected(item.id)}
              size={20}
              containerStyle={styles.check_box}
              activeColor={'#7FC7D9'}
              inactiveColor={'#DCF2F1'}
            />
            <Text
              style={styles.title_txt}
            >{item.name}</Text>
          </View>
        )
      })}

     

    </ScrollView>
  )
}

export default IndoorComponent

const styles = StyleSheet.create({
  horizontal_View: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  check_box: {
    borderColor: '#7FC7D9',
  },
  title_txt: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    paddingHorizontal: 10
  }
})