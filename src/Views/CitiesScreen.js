import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import { useGetAllcitiesQuery } from '../../redux/features/CitiesAPI'
import CardCity from '../components/Cities/CardCity'

const CitiesScreen = () => {

  const {data: cities} = useGetAllcitiesQuery()
  
  return (
    <ScrollView style={styles.scrollStyle} >
      <View style={styles.containerCities} >
        <CardCity cities={cities} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerCities: {
    backgroundColor: "#DCD7C9",
    padding: 4,
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'  
  }
});

export default CitiesScreen
