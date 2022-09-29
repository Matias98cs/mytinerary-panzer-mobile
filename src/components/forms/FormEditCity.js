import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function FormEditCity() {
  return (
    <View style={styles.containerForm}>
      <TextInput style={styles.styleInput} placeholder='City'  placeholderTextColor="gray"/>
      <TextInput style={styles.styleInput} placeholder='Country'  placeholderTextColor="gray"/>
      <TextInput style={styles.styleInput} placeholder='Photo'  placeholderTextColor="gray"/>
      <TextInput style={styles.styleInput} placeholder='Population' placeholderTextColor="gray" />
      <TextInput style={styles.styleInput} placeholder='Fundation'  placeholderTextColor="gray" />
      <TextInput style={styles.styleInput} placeholder='Description' placeholderTextColor="gray"/>
      <View style={styles.styleBtn}>
        <Button title='Edit' color="#eee"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerForm: {
        width: '80%',
        height: 600,
        alignItems: 'center',
        paddingVertical: 20
    },
    styleInput: {
        padding: 10,
        height: 45,
        borderRadius: 14,
        fontSize: 22,
        backgroundColor: '#DCD7C9',
        width: '100%',
        marginVertical: 20
    },
    styleBtn: {
        display: 'flex',
        backgroundColor: '#2C3639',
        width: '50%',
        padding: 4,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 14,
    }
})