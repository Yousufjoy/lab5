import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterPage from './src/pages/CounterPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/LoginPage';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <stack.Navigator>
        <stack.Screen name="CounterPage" component={CounterPage} />
        <stack.Screen name="LoginPage" component={LoginPage} />

      </stack.Navigator>
    
    </NavigationContainer>
   
  );
}


