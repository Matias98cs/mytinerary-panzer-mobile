import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native'
import { useGetAllItinerariesQuery } from "../../redux/features/myTineraryAPI"
import React from 'react'
import { useSelector } from 'react-redux';

export default function MyTinerary() {
  const user = useSelector(state => state.auth?.user)
  const userId = useSelector(state => state.auth?.user.id)
  const { data: itineraries } = useGetAllItinerariesQuery(userId);
  let itinerary = itineraries?.response
  const img = {
    uri: 'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }

  return (
    <>
      {itinerary
        ?
        <ScrollView>
          <View style={styles.itineraryContainer}>
            <Text style={styles.h1}>My Tinerary</Text>
            <View style={styles.photoUser}>
              <Image
                source={{ uri: user.photo }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.userName}>
              <Text style={styles.userText}> {user.name} </Text>
            </View>
            {itinerary?.map(item => {
              return (
                <View key={item._id}>
                  <Text style={{
                    fontSize: 35,
                    textAlign: 'center',
                    backgroundColor: '#DCD7C9',
                  }}>
                    <Text style={{
                      fontWeight: '600',
                      fontStyle: 'italic',
                      letterSpacing: 2,
                    }}>
                      {item?.name}
                    </Text>
                  </Text>
                  <View>
                    <Text style={{
                      textAlign: 'center',
                      paddingVertical: 10,
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'white'
                    }}>
                      {item?.city.city}
                    </Text>
                  </View>
                  <Image source={{ uri: item?.city.photo }}
                    style={{
                      width: 300,
                      height: 300,
                      borderTopLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      marginHorizontal: 50,
                    }}
                  />
                  <View>
                    <Text style={{
                      textAlign: 'center',
                      paddingVertical: 10,
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'white'
                    }}> {item?.city.country}</Text>
                  </View>
                  <View style={styles.desContainer}>
                    <Text style={{
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}>
                      Price: ${item.price}
                    </Text>
                    <Text style={{
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}>
                      {item.tags}
                    </Text>
                    <Text style={{
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}>
                      Duration:{item.duration}
                    </Text>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
        :
        <>
          <ImageBackground
            source={img} resizeMode='cover'
            style={{
              height: '100%',
            }}
          >
            <View style={styles.contain}>
              <View style={styles.titleContain}>
                <Text style={styles.titleYet}>
                🛬 No Itineraries Yet 🛫 
                </Text>
              </View>
            </View>
          </ImageBackground>
        </>
      }
    </>
  )
}

const styles = StyleSheet.create({
  itineraryContainer: {
    backgroundColor: '#3f4e4fbc',
  },
  photoUser: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  },
  userText: {
    color: '#DCD7C9',
    fontSize: 20,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 40,
    color: '#DCD7C9',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  desContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingVertical: 10,
    alignSelf: 'stretch',
  },
  contain: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleYet: {
    fontSize: 30,
    textAlign: 'center',
    color: '#252525',
  },
  titleContain:{
    backgroundColor:'#DCD7C9',
    width:'100%',
    paddingVertical: 10,
  },

})
