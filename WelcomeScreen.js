import Start from './components/Start';
import ViewProgress from './components/ViewProgress';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';

export default function WelcomeScreen({navigation}) {
  return(
    <View style={styles.container}>
      <Header nav = {navigation}/>
      <Start nav = {navigation}/>
      <ViewProgress/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});