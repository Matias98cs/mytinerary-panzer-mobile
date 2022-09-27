import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Views/HomeScreen";
import CitiesScreen from "../Views/CitiesScreen";
import NewCityScreen from "../Views/NewCityScreen";
import EditCityScreen from "../Views/EditCityScreen";
import MyTinerary from "../Views/MyTinerary";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "../Views/DetailsScreen";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStackNavigate = createStackNavigator()

function MyStack() {
  return(
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
          headerBackTitleVisible: true
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
    <Drawer.Navigator >
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
        name="MyTinerary"
        component={MyTinerary}
        
      />
    </Drawer.Navigator>
  );
}
