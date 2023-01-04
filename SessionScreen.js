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

var shuffledArray = imglst.sort((a, b) => 0.5 - Math.random());

export default function SessionScreen({navigation}) {

  const [showIndex, setShowIndex] = useState(0);
  const [buttonText, setButtonText] = useState("Next");
  
  function onPress() {
    if (time == "➡"){
      if (showIndex < 4) {
        setShowIndex(prevShowIndex => prevShowIndex + 1);
        setTime(exposureLength);
      }
      else {
        shuffledArray = imglst.sort((a, b) => 0.5 - Math.random());
        navigation.navigate('Finish');
      }
      if (showIndex == 3) {
        setButtonText("Finish");
    }
    }
  }
  const exposureLength = 5;
  const [time, setTime] = useState(exposureLength);

  function updateTime() {
    if (time > 1) {
      setTime(time - 1);
    } else if (time == 1) {
      clearTimeout(timerid);
      setTime("➡");
    }
  }
  let timerid = setTimeout(updateTime, 1000)

  return(
    <View style = {styles.container}>
      <Image 
      source = {shuffledArray[showIndex]}
      style = {styles.image}
      ></Image>
      <TouchableOpacity 
        style = {styles.nextButton}
        onPress = {onPress}>
        <Text style = {{fontSize: 50, color: "white", fontWeight: "bold"}}>{time}</Text>
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
    marginLeft:5,
    borderRadius: 100,
    height:100,
    width:100,
    backgroundColor: "#1156b2",
    alignItems: 'center',
    justifyContent: 'center',

  },
  timer:{
    fontSize: 30,
  }
});

const FinishScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};