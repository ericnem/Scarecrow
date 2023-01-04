import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen'
import SessionScreen from './SessionScreen'
import FinishScreen from './FinishScreen'
import SettingsScreen from './SettingsScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const fear = "spiders";

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Session" component={SessionScreen}/>
        <Stack.Screen name="Finish" component={FinishScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}