import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FormNewCity from "../components/forms/FormNewCity";

const image = {
  uri: "https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const NewCityScreen = () => {
  return (
    // <ScrollView style={styles.scrollStyle}>
      <View style={styles.containeNewCity}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imgBack}
        >
          <Text style={{fontSize: 40, paddingVertical: 10, color: "#eee"}}>Add Your City</Text>
          <FormNewCity />
        </ImageBackground>
      </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: "#DCD7C9",
  },
  containeNewCity: {
    width: '100%',
    height: '100%',
  },
  imgBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
});

export default NewCityScreen;
