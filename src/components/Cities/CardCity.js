import React from "react";
import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native';

function CardCity({ cities }) {

  const navigation = useNavigation()
  return (
    <>
      {cities?.response.map((item) => {
        return (
          <TouchableOpacity key={item._id} onPress={() => navigation.navigate('Details', {id: item._id})}>
          <View  style={styles.containerCities}>
            <View style={{backgroundColor: '#3F4E4F', borderRadius: 10 }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 160, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              />
              <Text style={styles.textCity}>{item.city}</Text>
            </View>
          </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  containerCities: {
    alignItems: "center",
    marginTop: 10,
    margin: 10
    // borderRadius: 10,
    // borderWidth: 1,
  },
  textCity: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: 4,
  },
});

export default CardCity;
