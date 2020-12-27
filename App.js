import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import MainNavigation from './navigation/root_Nav'
import { NavigationContainer } from '@react-navigation/native'
import RootNav from './navigation/root_Nav'

 const App = ()=> {
  return (
    <NavigationContainer>
      <RootNav/>
    </NavigationContainer>
  )
}

export default App;