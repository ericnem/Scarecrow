import * as React from "react";
import {StyleSheet, View, Text, Image} from 'react-native';

import { TouchableOpacity } from 'react-native';



export default function Start(props) {
  const phobia = "spiders";

  return (
    <View style={styles.box}>
      <Text style={styles.text}>Start a session</Text>
      <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress = {() => props.nav.navigate('Session')}>
          <Image
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/5261/5261929.png',
            }}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
  box: { 
    borderStyle: "solid",
    borderWidth: 1,
    margin: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  buttonFacebookStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    height: 60,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 10,
    marginTop: 5,
  },
  buttonImageIconStyle: {
    height: 60,
    width: 100,
  },
})

const SessionScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
