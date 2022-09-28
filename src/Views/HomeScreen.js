import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../components/Carousel";
import { useGetAllcitiesQuery } from "../../redux/features/CitiesAPI";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { data: cities } = useGetAllcitiesQuery()

  return (
    <View
      style={{
        backgroundColor: "#3F4E4F",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20%",
            color: "#DCD7C9",
            paddingBottom: 15,
            
          }}
        >
          My Tinerary
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 16,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 80, height: 80 }}
          />
          <Text
            style={{
              width: "55%",
              color: "white",
              paddingLeft: 5,
              fontSize: 15,
            }}
          >
            Find your perfect trip, designed by insiders who know and love their
            cities!"
          </Text>
        </View>
        <View style={styles.btnHome}>
          <Button
            onPress={() => navigation.navigate("Cities")}
            title="Enter"
            accessibilityLabel="Learn more about this purple button"
            color="#DCD7C9"
          />
        </View>
      </View>
      <Carousel cities={cities} />
    </View>


  );
};

const styles = StyleSheet.create({
  btnHome: {
    backgroundColor: "#A27B5C",
    width: "25%",
    borderRadius: 12,
  },
});

export default HomeScreen;
