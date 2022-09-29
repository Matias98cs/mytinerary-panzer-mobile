import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

export default function SingUp() {
  return (
    <View style={styles.containerForm}>
        <Text style={styles.titleSignUp}>Create User</Text>
      <TextInput
        style={styles.styleInput}
        placeholder="Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.styleInput}
        placeholder="Last Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.styleInput}
        placeholder="Photo"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.styleInput}
        placeholder="Country"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.styleInput}
        placeholder="Email"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.styleInput}
        placeholder="Password"
        placeholderTextColor="gray"
      />
      <View style={styles.styleBtn}>
        <Button title="Edit" color="#eee" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    paddingHorizontal: 22,
    backgroundColor: '#3F4E4F'
  },
  styleInput: {
    padding: 10,
    height: 45,
    borderRadius: 14,
    fontSize: 22,
    backgroundColor: "#DCD7C9",
    width: "100%",
    marginVertical: 22,
  },
  styleBtn: {
    display: "flex",
    backgroundColor: "#A27B5C",
    width: "50%",
    padding: 4,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 14,
  },
  titleSignUp: {
    textAlign: 'center',
    fontSize: 30,
    color: '#DCD7C9'
  }
});
