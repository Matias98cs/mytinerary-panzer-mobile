import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function FormSignIn() {
  return (
    <View style={styles.containerSigIn}>
      <View style={styles.inpuText}>
        <Text style={styles.text}>Email</Text>
        <TextInput placeholder="Email" style={styles.inputText}/>
      </View>
      <View style={styles.inpuText}>
        <Text style={styles.text}>Password</Text>
        <TextInput placeholder="Password" style={styles.inputText}/>
      </View>
      <View style={styles.btnCreate}>
        <Button title="Sign In" color="#eee"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerSigIn: {
        width: "80%",
        height: 500,
        justifyContent: 'space-around'
    },
    inputText: {
        padding: 10,
        height: 45,
        borderRadius: 14,
        fontSize: 22,
        backgroundColor: '#eee'
    },
    btnCreate: {
        display: 'flex',
        backgroundColor: '#A27B5C',
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 14,
        paddingVertical: 7
    },
    text: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        letterSpacing: .5,
        color: '#252525'
    }
})
