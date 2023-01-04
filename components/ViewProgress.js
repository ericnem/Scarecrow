import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ViewProgress() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>View progress</Text>
      <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://images.assetsdelivery.com/compings_v2/blankstock/blankstock1805/blankstock180501230.jpg',
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
    borderWidth: 0.5,
    borderColor: 'white',
    height: 60,
    marginLeft: 120,
    marginRight: 120,
    marginBottom: 20,
  },
  buttonImageIconStyle: {
    height: 60,
    width: 100,
  },
})