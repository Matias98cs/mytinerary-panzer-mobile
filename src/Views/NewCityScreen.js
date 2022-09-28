import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const NewCityScreen = () => {
  return (
    <ScrollView style={styles.scrollStyle}>
      <Text style={{
        fontSize: 40,
        textAlign: 'center',
        marginTop: "20%"
      }}>
        New City 🧳
      </Text>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: '#DCD7C9',
  }
});

export default NewCityScreen
