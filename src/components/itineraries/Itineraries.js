import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Activities from "../activities/Activities";

export default function Itineraries({ item }) {
  return (
    <View style={styles.itinerariesContainer}>
      <Text  style={styles.texto}>{item.name}</Text>
      <Activities id={item._id}/>
      <View style={styles.description}>
        <Text style={styles.texto} >Price: ${item.price}</Text>
        <Text  style={styles.texto} >{item.likes.length}</Text>
        <Text  style={styles.texto} >Duration: {item.duration}hs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itinerariesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10
  },
  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  desDetail: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 5,
    textDecorationLine: "underline",
  },
  texto: {
    fontSize: 19,
  },
});
