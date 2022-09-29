import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { useGetSignInUserMutation } from "../../../redux/features/userAPI";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../../redux/slices/userSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setReload } from "../../../redux/slices/ReloadSlice";

export default function FormSignIn() {
  // const formData = React.useRef(null).current;
  const [signinForm] = useGetSignInUserMutation();
  const [error, setError] = useState("")
  const [mail, setMail] = React.useState("")
  const [pass, setPass] = React.useState("")
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      mail: mail,
      pass: pass,
      from: "form"
  }
    if(data.mail == "" || data.pass == "") {
      console.log('Esta vacio')
    }else {
      singInUser(data)
      // let res = await signinForm(data)
      // console.log(res)
    }
  }

  async function singInUser(values) {
    try {
      let res = await signinForm(values)
      if(res.data?.success){
        console.log(res.data.response.user)
        dispatch(setAuthUser(res.data.response.user))
        AsyncStorage.setItem('token', res.data.response.token)
        dispatch(setReload())
        setMail("")
        setPass("")
        navigation.goBack()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.containerSigIn} >
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput onChangeText={setMail} autoComple te="email" textContentType="emailAddress" placeholder="Email" style={styles.inputText} />
      </View>
      <View>
        <Text style={styles.text}>Password</Text>
        <TextInput onChangeText={setPass} textContentType="password" secureTextEntry={true} placeholder="Password" style={styles.inputText}/>
      </View>
      <View style={styles.btnCreate}>
        <Button title="Sign In" color="#eee" onPress={handleSubmit}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerSigIn: {
        width: "80%",
        height: 500,
        justifyContent: 'space-around'
    },
    inputText: {
        padding: 10,
        height: 45,
        borderRadius: 14,
        fontSize: 22,
        backgroundColor: '#eee'
    },
    btnCreate: {
        display: 'flex',
        backgroundColor: '#A27B5C',
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 14,
        paddingVertical: 7
    },
    text: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        letterSpacing: .5,
        color: '#252525'
    }
})
