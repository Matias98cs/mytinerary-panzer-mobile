import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useCommentsAllMutation} from '../../../redux/features/CommentsAPI'

export default function DisplayComment({id}) {
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
      {comments?.map( item => {
        return(
            <View key={item._id} style={styles.containerComment}>
                <Image
                source={{ uri: item?.user.photo }}
                style={{ width: 50, height: 50 }}
                />
                <View style={{paddingHorizontal: 5}}>
                    <Text>{item.name}</Text>
                    <Text>{item.comment}</Text>
                </View>
            </View>
        )
      })}
      <TextInput style={{ marginVertical: 10 ,borderRadius: 14, height: 30, borderWidth: 1, padding: 5}} value="send you comment" />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    containerComment: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 8
    }
})