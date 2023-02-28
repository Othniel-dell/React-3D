import * as React from 'react';
import { View, Text ,Button, StyleSheet, ImageBackground, Image} from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../io.png")}/>
      </View>  
        <Text style={styles.text1}>APP NAME</Text>
        <Text style={styles.text2}>Plus</Text>
        <Button color={'orange'} title="Login" onPress={() => navigation.navigate("Login")}/>
        <Button color={'orange'} title="SignUP" onPress={() => navigation.navigate("Register")}/>
      </View>    
    );
}

const styles = StyleSheet.create({ 
  container:{
    flex: 1,
    height:10,
    position: 'absolute',
  },
  imageContainer:{
    flex: 1,
    height:10,
    position: 'absolute',
  },
  text1:{
    flex:1,
    color: 'orange', 
    fontSize : 60,
    position: 'absolute',
   },
   text2:{
    color: 'orange', 
    fontSize : 60,
    position: 'absolute',
   }

})

