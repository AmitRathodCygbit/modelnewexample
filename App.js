import { View, Text } from 'react-native'
import React from 'react'
import Modelone from './src/Models/Modelone'
import ListViews from './src/component/ListViews'
import InputViews from './src/component/InputViews'
import ModelTwo from './src/Models/ModelTwo'
import Scratch from './src/Models/Scratch'
const App = () => {
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
      {/* <Modelone/> */}
      {/* <ListViews/> */}
      {/* <InputViews/> */}
      <ModelTwo/> 
   {/* <Scratch/> */}
    </View>
  )
}

export default App