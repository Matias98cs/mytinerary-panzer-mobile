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
        <Image
          source={{ uri: dataCity.photo }}
          style={{
            width: 260,
            height: 250,
            borderTopLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        />
        <View style={styles.desDetail}>
          <Text style={styles.textDetail}>{dataCity.country}</Text>
          <Text style={styles.desDetail}>Population:</Text>
          <Text style={styles.texto}>{dataCity.population}</Text>
          <Text style={styles.desDetail}>Fundation:</Text>
          <Text style={styles.texto}> {date}</Text>
          <Text style={styles.desDetail}>Description:</Text>
          <Text style={styles.textoDes}> {dataCity.description?.slice(0,100)}...</Text>
        </View>
        <Text style={styles.titleIti}>ITINERARY</Text>
        <View>
        {dataItinerary?.map( item => {
          return(
            <Itineraries key={item._id} item={item} />
          )
        })}
      </View>
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textDetail: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
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
  },
  texto: {
    fontSize: 19,
    paddingHorizontal: 15,
    paddingTop: 4,
  },
  textoDes: {
    paddingHorizontal: 15,
    fontSize: 20,
    fontStyle: "italic",
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
