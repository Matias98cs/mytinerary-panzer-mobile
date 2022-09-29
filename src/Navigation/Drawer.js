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

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStackNavigate = createStackNavigator()

function MyStack() {
  
  const [singInToken] = useSignInTokenMutation()
  const [admin , setAdmin] = useState()
  const role = useSelector(state => state.auth.role)
  const dispatch = useDispatch()

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
        name="Home"
        component={MyStack}

      />
      <Drawer.Screen
        name="Cities"
        component={CitiesScreen}

      />
      <Drawer.Screen
        name="NewCity"
        component={NewCityScreen}

      />
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
