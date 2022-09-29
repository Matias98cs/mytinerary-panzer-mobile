import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FormEditCity from "../components/forms/FormEditCity";

const image = {
  uri: "https://images.pexels.com/photos/3714900/pexels-photo-3714900.jpeg",
};

const EditCityScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imgBack}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerEditCity}>
        <Text
          style={{
            fontSize: 35,
            marginTop: "5%",
          }}
        >
          CITY UPDATE 🖋
        </Text>
        <FormEditCity />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    height: "100%",
  },
  containerEditCity: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default EditCityScreen;
