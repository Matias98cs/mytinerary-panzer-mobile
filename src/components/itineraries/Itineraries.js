import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Activities from "../activities/Activities";
import DisplayComment from "../comments/DisplayComment";

export default function Itineraries({ item }) {
  const [open, setOpen] = useState(false);
  const [viewMore, setViewMore] = useState("View Comments");

  const handleOpenComments = () => {
    if (open === true) {
      setOpen(false);
      setViewMore("View Comments");
    } else {
      setOpen(true);
      setViewMore("View Less");
    }
  };

  return (
    <>
      <View style={styles.itinerariesContainer}>
        <Text style={styles.textoTitle}>{item.name}</Text>
        <Activities id={item._id} />
        <View style={styles.description}>
          <Text style={styles.texto}>Price: ${item.price}</Text>
          <Text style={styles.texto}>{item.likes.length}</Text>
          <Text style={styles.texto}>Duration: {item.duration}hs</Text>
        </View>
        {open ? <DisplayComment id={item._id} /> : null}
      <View style={styles.btnShow}>
        <Button onPress={handleOpenComments} title={viewMore} color="#DCD7C9" />
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itinerariesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 14,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
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
  textoTitle:{
    fontSize: 19,
    textAlign:'center',
    marginVertical: 10,
    fontWeight:'500',
    marginHorizontal: 5
  },
  btnShow: {
    backgroundColor: "#A27B5C",
    borderRadius: 12,
    fontWeight: "bold",
    marginVertical: 15
  },
});
