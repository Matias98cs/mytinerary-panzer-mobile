import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  useGetCityByIdQuery,
  useGetCityForIdMutation,
} from "../../redux/features/CitiesAPI";

export default function DetailsScreen(props) {

  const [getOneCity] = useGetCityForIdMutation();
  const { id } = props.route?.params
  const [dataCity, setDataCity] = useState({});
  console.log(id)
  let date = new Date(dataCity.fundation).getFullYear()

  async function getCity() {
    try {
      let res = await getOneCity(id);
      if (res.data.success) {
        setDataCity(res.data?.response);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCity();
  }, [])
  console.log(dataCity)

  return (
    <View style={styles.detailContainer}>
      <Text style={{ fontSize: 25, fontWeight: "bold", padding: 6 }}>{dataCity.city}</Text>
      <Image
        source={{ uri: dataCity.photo }}
        style={{ width: 260, height: 250, borderTopLeftRadius: 25, borderBottomRightRadius: 25 }}
      />
      <View style={styles.desDetail}>
        <Text style={styles.textDetail}>{dataCity.country}</Text>
        <Text style={styles.desDetail}>Population:</Text><Text style={styles.texto}>{dataCity.population}</Text>
        <Text style={styles.desDetail}>Fundation:</Text><Text style={styles.texto}> {date}</Text>
        <Text style={styles.desDetail}>Description:</Text><Text style={styles.textoDes}> {dataCity.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textDetail: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 5
  },
  detailContainer: {
    alignItems: "center",
    padding: 12,
    backgroundColor: '#dcd7c9af',
    height: '100%'
  },
  desDetail: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5,
    textDecorationLine: 'underline'
  },
  texto: {
    fontSize: 19,
    paddingHorizontal: 15,
    paddingTop: 4
  },
  textoDes: {
    paddingHorizontal: 15,
    fontSize: 20,
    fontStyle: 'italic',
  }
})

// rnf