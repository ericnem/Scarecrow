import { StyleSheet, TouchableOpacity, Text, View, Image, Touchable } from 'react-native';
import React, { useState } from "react";

var cuteimg = require("./assets/cute/cute4.jpeg");

export default function FinishScreen({navigation}) {

  const [showIndex, setShowIndex] = useState(0);
  function onPress() {navigation.navigate('Welcome')}
  

  return(
    <View style = {styles.container}>

      <Text style = {styles.headerText}>Session Finished!</Text>

      <Image 
      source = {cuteimg}
      style = {styles.image}
      ></Image>

      <View style = {{flexDirection: "row", margin: 20}}>
        <View style = {styles.pointsBox}>
          <Text style = {{fontSize:20, color:"black", margin: 5}}>Points{"\n"} ⭐ 5</Text>
        </View>
        <View style = {styles.timeBox}>
          <Text style = {{fontSize:20, color:"black", margin: 5}}>Time{"\n"} 3:20</Text>
        </View>
        <View style = {styles.timeBox}>
          <Text style = {{fontSize:20, color:"black", margin: 5}}>Peak HR{"\n"} ❤️ 130</Text>
        </View>
      </View>

      <TouchableOpacity 
        style = {styles.nextButton}
        onPress = {onPress}>
        <Text style = {{fontSize: 24}}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  headerText: {
    fontSize: 40,
    marginBottom: 20,
  },
  nextButton: {
    height:50,
    width:200,
    backgroundColor: "#DDDDDD",
    alignItems: 'center',
    justifyContent: 'center',

  },
  pointsBox: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "cyan",
  },
  timeBox: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "cyan",
  }
});

const WelcomScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;}