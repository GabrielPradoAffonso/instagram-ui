import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home'
import { Image } from 'react-native';

import House from '../assets/house.svg'
import Search from '../assets/search.svg'
import Union from '../assets/union.svg'
import Store from '../assets/store.svg'
import Foto from '../assets/fotoUser.png'

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#000',
            }
        }}
    >
      <Tab.Screen options={{
        tabBarIcon: ({color}) => <House />
      }} 
      name="Home" component={Home} 
      />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Search />
      }} 
      name="Home2" component={Home} 
      />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Union />
      }} 
      name="Home3" component={Home} 
      />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Store />
      }} 
      name="Home4" component={Home} 
      />

    <Tab.Screen options={{
        tabBarIcon: ({color}) => <Image style={{
            width: 30,
            height: 30,
        }} source={Foto} />
      }} 
      name="Home5" component={Home} 
      />

    </Tab.Navigator>
  );
}