import { StyleSheet, TouchableOpacity, Text, View, Image, Touchable } from 'react-native';
import React, { useState } from "react";

var imglst = [
  require("./assets/spiders/spider1.jpeg"),
  require("./assets/spiders/spider2.jpg"),
  require("./assets/spiders/spider3.jpg"),
  require("./assets/spiders/spider4.jpg"),
  require("./assets/spiders/spider5.jpg"),
  require("./assets/spiders/spider6.jpg"),
  require("./assets/spiders/spider7.jpg"),
  require("./assets/spiders/spider8.jpeg"),
  require("./assets/spiders/spider9.jpeg"),
  require("./assets/spiders/spider10.jpg"),
  require("./assets/spiders/spider11.jpeg"),
  require("./assets/spiders/spider12.jpeg"),
  require("./assets/spiders/spider13.jpg"),
  require("./assets/spiders/spider14.jpeg"),
  require("./assets/spiders/spider15.jpeg"),
  require("./assets/spiders/spider16.jpeg"),
  require("./assets/spiders/spider17.jpeg"),
  require("./assets/spiders/spider18.jpeg"),
  require("./assets/spiders/spider19.jpeg"),
  require("./assets/spiders/spider20.jpeg"),
]

export default function SessionScreen({navigation}) {
  const shuffledArray = imglst.sort((a, b) => 0.5 - Math.random());
  const [showIndex, setShowIndex] = useState(0);
  const [buttonText, setButtonText] = useState("Next")
  function onPress() {
    if (showIndex < 4) {
      setShowIndex(prevShowIndex => prevShowIndex + 1)
    }
    else {
      navigation.navigate('Finish')
    }
    if (showIndex == 3) {
      setButtonText("Finish");
    }}

  return(
    <View style = {styles.container}>
      <Image 
      source = {shuffledArray[showIndex]}
      style = {styles.image}
      ></Image>
      <TouchableOpacity 
        style = {styles.nextButton}
        onPress = {onPress}>
        <Text style = {{fontSize: 24}}>{buttonText}</Text>
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
    marginBottom: 50
  },
  nextButton: {
    height:50,
    width:200,
    backgroundColor: "#DDDDDD",
    alignItems: 'center',
    justifyContent: 'center',

  }
});

const FinishScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};