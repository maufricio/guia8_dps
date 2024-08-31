import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen' //Importar el componente de pantalla HomeScreen
import DetailsScreen from './src/screens/DetailsScreen' //Importar el componente de pantalla DetailsScreen

//Crea el Drawer Navigator
const Drawe = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Drawe.Navigator initialRouteName="Home">
        <Drawe.Screen name="Home" component={HomeScreen} />
        <Drawe.Screen name="Details" component={DetailsScreen} />
      </Drawe.Navigator>
      </NavigationContainer>
  )
}