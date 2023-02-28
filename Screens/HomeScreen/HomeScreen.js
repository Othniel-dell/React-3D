import * as React from 'react';
import { View, Text ,Button, StyleSheet, ImageBackground} from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <ImageBackground source={require("../io.png")} style={{ height : '100%' }}/>
        <Text style={{color: 'orange', fontSize : 60, }}>APP NAME</Text>
        <Text style={{color: 'white', fontSize : 64}}>Plus</Text>
        <Button color={'orange'} title="Login" onPress={() => navigation.navigate("Login")}/>
        <Button color={'orange'} title="SignUP" onPress={() => navigation.navigate("Register")}/>
      </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    marginHorizontal: '50',
    marginVertical: '40',
    
})