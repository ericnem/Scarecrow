import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


export default function Header() {
  return (
    <View style = {[styles.header, {flexDirection: "row"}]}>
      <Text style = {styles.baseText}>Welcome Back!</Text>
      <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/6522/6522516.png',
            }}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
  header:{
    flex: 0,
    paddingBottom: 20

  },
  baseText: { 
    fontSize: 30, 
    paddingTop: 60,
    paddingLeft: 20,
  },
  buttonFacebookStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'white',
    marginTop: 45,
    marginLeft: 35
  },
  buttonImageIconStyle: {
    height: 75,
    width: 75,}})