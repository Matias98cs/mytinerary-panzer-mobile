import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Views/HomeScreen'
import CitiesScreen from '../Views/CitiesScreen'
import NewCityScreen from '../Views/NewCityScreen'
import EditCityScreen from '../Views/EditCityScreen'
import MyTinerary from '../Views/MyTinerary'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator  initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cities" component={CitiesScreen} />
      <Drawer.Screen name="NewCity" component={NewCityScreen} />
      <Drawer.Screen name="EditCity" component={EditCityScreen} />
      <Drawer.Screen name="MyTinerary" component={MyTinerary} />
    </Drawer.Navigator>
  );
}

