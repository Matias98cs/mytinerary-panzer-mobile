import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'


export default function FormNewCity() {
  return (
    <View style={styles.containerInputs}>
      <View>
        <TextInput style={styles.inputText} placeholder='City'/>
      </View>
      <View>
        <TextInput style={styles.inputText} placeholder='Country'/>
      </View>
      <View>
        <TextInput style={styles.inputText} placeholder='Photo'/>
      </View>
      <View>
        <TextInput style={styles.inputText} placeholder='Population'/>
      </View>
      <View>
        <TextInput keyboardType='numeric' style={styles.inputText} placeholder='Fundation'/>
      </View>
      <View>
        <TextInput style={styles.inputText} placeholder='Description'/>
      </View>
      <View style={styles.btnCreate}>
        <Button title='Send' color="#eee"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerInputs: {
      flex:1,
      justifyContent: "space-evenly" ,
      height: "70%",
      width: "90%",
      borderRadius: 14,
      padding: 12
  },
  inputText: {
      padding: 10,
      height: 45,
      borderRadius: 14,
      fontSize: 22,
      backgroundColor: '#DCD7C9'
  },
  btnCreate: {
      display: 'flex',
      backgroundColor: '#A27B5C',
      width: '50%',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 14,
      padding: 4,

  }
})