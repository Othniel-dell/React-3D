import { View, Text, ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Background = () => {
  return (
    <View>
    <ImageBackground source={require("./io.png")} style= {{ height: 100 }}> </ImageBackground>
      <Text></Text>
    </View>
  )
}

export default Background