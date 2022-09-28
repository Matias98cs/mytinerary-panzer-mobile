import { View, Text, Image, StyleSheet, TextInput, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCommentsAllMutation } from '../../../redux/features/CommentsAPI'
/* import { color } from 'react-native-reanimated'; */

export default function DisplayComment({ id }) {
  const [findComments] = useCommentsAllMutation();
  const [comments, setCommenst] = useState([]);

  const showComments = async () => {
    try {
      let res = await findComments(id)
      if (res?.data.success) {
        setCommenst(res?.data.response);
        // console.log(res?.data.response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showComments()
  }, [])

  return (
    <View style={styles.container}>
      {comments?.map(item => {
        return (
          <View key={item._id} style={styles.containerComment}>
            <Image
              source={{ uri: item?.user.photo }}
              style={{ width: 50, height: 50, borderRadius: 40 }}
            />
            <View>
              <View>
                <Text style={{ fontWeight: 'bold', paddingHorizontal: 10}}>{item?.user.name}</Text>
              </View>
              <View style={{ paddingHorizontal: 10, width: '100%', marginTop:-5}}>
                <Text>{item.name}</Text>
                <Text>{item.comment}</Text>
              </View>
            </View>
          </View>
        )
      })}
      <TextInput style={{ color: "white", marginVertical: 10, borderRadius: 14, height: 30, borderWidth: 1, padding: 5 }} value="send you comment" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#3F4E4F',
    borderRadius: 20,
    padding: 18,
  },
  containerComment: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    padding: 6,
    borderRadius: 20,
    width: '99%',
    paddingHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#DCD7C9',
  }
})