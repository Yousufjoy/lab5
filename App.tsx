import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterPage from './src/pages/CounterPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/LoginPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsPage from './src/pages/SettingsPage';
import { AuthContext, AuthProvider } from './src/providers/AuthProvider';

const stack = createStackNavigator();
const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="CounterPage" component={CounterPage} />
    </stack.Navigator>
  );
};

const LoginScreen = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="LoginPage" component={LoginPage} />
    </stack.Navigator>
  );
};

const DashboardScreen = () => {
  return (
    <bottom_tab.Navigator>
      <bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen} />
      <bottom_tab.Screen name="Settings" component={SettingsPage} />
    </bottom_tab.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) =>
          auth?.isLoggedIn ? (
            <NavigationContainer>
              <DashboardScreen />
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <LoginScreen />
            </NavigationContainer>
          )
        }
      </AuthContext.Consumer>
    </AuthProvider>
  );
}
