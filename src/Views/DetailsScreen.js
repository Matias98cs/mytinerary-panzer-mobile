import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  useGetCityByIdQuery,
  useGetCityForIdMutation,
} from "../../redux/features/CitiesAPI";
import {
  useGetAllItinerariesQuery,
  useItinerariesForDetailsMutation,
} from "../../redux/features/ItineraryAPI";
import Itineraries from "../components/itineraries/Itineraries";
import { ScrollView } from "react-native-gesture-handler";

export default function DetailsScreen(props) {

  const [getOneCity] = useGetCityForIdMutation();
  const [getItineraries] = useItinerariesForDetailsMutation();
  const { id } = props.route?.params;
  const [dataCity, setDataCity] = useState({});
  const [dataItinerary, setDataItinerary] = useState();

  let date = new Date(dataCity.fundation).getFullYear();

  async function getCity() {
    try {
      let res = await getOneCity(id);
      if (res.data.success) {
        setDataCity(res.data?.response);
        let resIt = await getItineraries(id);
        if (resIt.data.success) {
          setDataItinerary(resIt.data.response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCity();
  }, []);


  return (
    <ScrollView style={styles.scrollStyle}>
      <View style={styles.detailContainer}>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 6 }}>
          {dataCity.city}
        </Text>
        <View>
          <Image
            source={{ uri: dataCity.photo }}
            style={{
              width: 260,
              height: 250,
              borderTopLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          />
          <Text style={styles.textDetail}>{dataCity.country}</Text>
        </View>
        <View style={styles.container}>
          <View style={{
            display: 'flex', flexDirection: 'row'
          }}>
            <Text style={styles.desDetail}>Population:</Text>
            <Text style={styles.texto}>{dataCity.population}</Text>
          </View>
          <View style={{
            display: 'flex', flexDirection: 'row'
          }}>
            <Text style={styles.desDetail}>Fundation:</Text>
            <Text style={styles.texto}> {date}</Text>
          </View>
          <Text style={styles.desDetail}>Description:</Text>
          <Text style={styles.textoDes}> {dataCity.description?.slice(0, 100)}...</Text>
        </View>
        <Text style={styles.titleIti}>ITINERARY</Text>
        <View>
          {dataItinerary?.map(item => {
            return (
              <Itineraries key={item._id} item={item} />
            )
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f4e4fdc',
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  textDetail: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
  detailContainer: {
    alignItems: "center",
    backgroundColor: "#dcd7c9af",
    height: "100%",
  },
  desDetail: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5,
    textDecorationLine: "underline",
    color: 'white',
  },
  texto: {
    fontSize: 19,
    paddingTop: 4,
    color: '#eee',
  },
  textoDes: {
    paddingHorizontal: 15,
    fontSize: 20,
    padding: 5,
    color: '#eee',
    textAlign: 'justify',
  },
  titleIti: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3F4E4F',
    paddingVertical: 10,
    backgroundColor: '#a27b5cc0',
    width: '100%'
  },
  scrollStyle: {
    backgroundColor: '#DCD7C9',
  }
});

// rnf
