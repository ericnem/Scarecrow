import React, { useState } from "react";
import {StyleSheet, View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getItem from '@react-native-async-storage/async-storage';

export default function SettingsScreen({navigation}) {
  
  const [fearopen, setFearOpen] = useState(false);
  const [fearvalue, setFearValue] = useState(null);
  const [fearItems, setFearItems] = useState([
    {label: 'Spiders', value: 'spiders'},
    {label: 'Heights', value: 'heights'},
  ]);
  const [sizeopen, setSizeOpen] = useState(false);
  const [sizevalue, setSizeValue] = useState(null);
  const [sizeItems, setSizeItems] = useState([
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '9', value: 9},
    {label: '10', value: 10}
  ]);

  return(
    <View style = {{justifyContent: "center"}}>
      <View style = {{alignItems: "center"}}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png'}}
          style={styles.userImg}/>
      </View>
      <View style = {{flexDirection:"row",alignItems:"center",marginBottom: 100}}>
        <Text style = {styles.phobiaText}>Phobia:          </Text>
        <DropDownPicker
          open={fearopen}
          value={fearvalue}
          items={fearItems}
          setOpen={setFearOpen}
          setValue={setFearValue}
          setItems={setFearItems}
          max={2}
          placeholder={"Select a phobia"}
          style={{width:200, leftMargin:20}}
          dropDownContainerStyle={{maxWidth:200}}/>
      </View>

      <View style = {{flexDirection:"row",marginBottom: 50}}>
        <Text style = {styles.phobiaText}>Session Size:</Text>
        <DropDownPicker
          open={sizeopen}
          value={sizevalue}
          items={sizeItems}
          setOpen={setSizeOpen}
          setValue={setSizeValue}
          setItems={setSizeItems}
          placeholder={"Select # of stimuli"}
          style={{width:200, leftMargin:20}}
          dropDownContainerStyle={{maxWidth:200}}/>
      </View>
       
    </View>
  )
}
const styles = StyleSheet.create({
  userImg: {
    margin:30,
    width:75,
    height:75,
  },
  phobiaText: {
    fontSize: 20,
    margin:10,
  }
})