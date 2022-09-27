import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.imgHeaderTitle}>
        <Text style={styles.titleHeader}>My Tinerary</Text>
        <Image source={require('../../../assets/logo.png')} style={{width: 30, height: 50}} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#3F4E4F',
        width: '100%',
        justifyContent: "center",
        alignContent: 'center',
        height: 100
    },
    titleHeader: {
        color: '#eee',
        fontSize: 20,
        fontWeight: "bold"
    },
    imgHeaderTitle: {
        flexDirection: "row"
    }
});
  

export default Header

// rnfe