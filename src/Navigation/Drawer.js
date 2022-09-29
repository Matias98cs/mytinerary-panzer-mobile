import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Views/HomeScreen";
import CitiesScreen from "../Views/CitiesScreen";
import NewCityScreen from "../Views/NewCityScreen";
import EditCityScreen from "../Views/EditCityScreen";
import MyTinerary from "../Views/MyTinerary";
import { useSignInTokenMutation } from '../../redux/features/userAPI';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "../Views/DetailsScreen";
import SingIn from '../Views/SingIn'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthUser } from "../../redux/slices/userSlice";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStackNavigate = createStackNavigator()

function MyStack() {

  return (
    <HomeStackNavigate.Navigator
      initialRouteName="HomeScreen"
    >
      <HomeStackNavigate.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}

      />
      <HomeStackNavigate.Screen
        name="Cities"
        component={CitiesScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false
        }}
      />
      <HomeStackNavigate.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false
        }}
      />
    </HomeStackNavigate.Navigator>
  )
}

export default function MyDrawer() {

    
  const [singInToken] = useSignInTokenMutation()
  const [admin , setAdmin] = useState()
  const [token, setToken] = useState()
  const user = useSelector(state => state.auth.user?.name)
  const reload = useSelector(state => state.reload.reload)
  const dispatch = useDispatch()
  const logged = useSelector(state => state.auth.logged)
  const role = useSelector(state => state.auth.role)

  
  async function verifyToken(){
    const value = await AsyncStorage.getItem('token')
    try{
      let res = await singInToken(value)
      if(res.data?.success){
        dispatch(setAuthUser(res.data.response.user))
      }else{
        AsyncStorage.removeItem('token')
      }
    }catch(error){
      AsyncStorage.removeItem('token')
      console.log(error)
    }
  }

  useEffect(() => {
    if(role === "admin"){
      setAdmin(true)
    }else if(role === "user") {
      setAdmin(false)
    }
  }, [role])

    
  useEffect(() => {
    if(AsyncStorage.getItem('token').then(value => setToken(value))){
      verifyToken()
    }
  },[])

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle:{ 
        backgroundColor:'#DCD7C9'
      }, 
      headerStyle:{
        backgroundColor:'#DCD7C9',
      },
      headerTitleStyle: {
        color: '#252525',
      } 
    }}
    >
      <Drawer.Screen
        name=
        {
          logged
          ?
          user
          :
          "Home"
        }
        component={MyStack}

      />
      <Drawer.Screen
        name="Cities"
        component={CitiesScreen}

      />

      {
        admin
        ?
        <Drawer.Screen
          name="NewCity"
          component={NewCityScreen}
  
        />
        : null
      }
      <Drawer.Screen
        name="EditCity"
        component={EditCityScreen}

      />
      <Drawer.Screen
        name="My Itineraries"
        component={MyTinerary}

      />
      <Drawer.Screen
        name="Sign In"
        component={SingIn}
      />      
    </Drawer.Navigator>
  );
}
