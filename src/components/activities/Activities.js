import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import {useGetActivityQuery} from '../../../redux/features/ActivitiesAPI'

export default function Activities(props) {

    const {data: activites} = useGetActivityQuery(props.id)
    let activity = activites?.response
  return (
    <View>
      <Text>ACTIVITIES</Text>
      {activity?.map(item => {
        return(
            <View key={item._id} style={styles.containerActi}>
                <Text>{item.name}</Text>
                <Image
                source={{ uri: item.photo }}
                style={{ width: 300, height: 150 }}
              />
            </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  containerActi: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10
  }
})