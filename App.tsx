import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterPage from './src/pages/CounterPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/LoginPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsPage from './src/pages/SettingsPage';
import NationlizePage from './src/pages/NationalizePage';


const stack = createStackNavigator();

const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen = ()=>{
  return(

  <stack.Navigator >
    <stack.Screen name="CounterPage" component={CounterPage} />
    <stack.Screen name="LoginPage" component={LoginPage} />
  </stack.Navigator>)
  
}

export default function App() {
  return (
    <NavigationContainer>

  <bottom_tab.Navigator>
     
        <bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen} />
        <bottom_tab.Screen name="LoginPage" component={SettingsPage} />
        <bottom_tab.Screen name="Nationalize" component={NationlizePage} />

     
  </bottom_tab.Navigator>
    
    </NavigationContainer>
   
  );
}


