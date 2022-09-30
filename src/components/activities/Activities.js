import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useGetActivityQuery } from '../../../redux/features/ActivitiesAPI'

export default function Activities(props) {

  const { data: activites } = useGetActivityQuery(props.id)
  let activity = activites?.response
  return (
    <View style={styles.container}>
      <Text style={styles.activity}>ACTIVITIES</Text>
      {activity?.map(item => {
        return (
          <View key={item._id} style={styles.containerActi}>
            <View style={{
            }}>
            <Text style={styles.text}>{item.name}</Text>
            </View>
            <Image
              source={{ uri: item.photo }}
              style={{
                width: 300,
                height: 180,
                borderTopLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
            />
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#3f4e4fdc',
    borderRadius: 10,
    paddingVertical: 15,
  },
  containerActi: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10
  },
  activity: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    borderRadius: 40,
    marginVertical: 15,
    textDecorationLine: "underline",
    letterSpacing: 1.5,
  },
  text:{
    fontSize: 17,
    paddingVertical: 8,
    fontWeight:'500',
    color: 'white',
  }
})