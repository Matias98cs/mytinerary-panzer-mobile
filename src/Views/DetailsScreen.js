import { View, Text } from 'react-native'
import React from 'react'

export default function DetailsScreen(props) {

    const{id} = props.route.params
    console.log(id)
  return (
    <View>
      <Text>Pagina de details</Text>
    </View>
  )
}

// rnf