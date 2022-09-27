import React from 'react'
import { View, Text } from 'react-native'

const MyTinerary = (props) => {
  console.log(props)
  return (
    <View>
      <Text style={{
        fontSize: 40,
        textAlign: 'center',
        marginTop: "20%"
      }}>
        My Tinerary Screen
      </Text>
    </View>
  )
}

export default MyTinerary
