import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FormSignIn from '../components/forms/FormSignIn'

export default function SingIn() {
  return (
    <View style={styles.containerSingIn}>
        <FormSignIn />
    </View>
  )
}

const styles = StyleSheet.create({
    containerSingIn: {
        backgroundColor: "#DCD7C9",
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})