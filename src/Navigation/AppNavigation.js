import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from '../screens/Landing';
import AppOnboarding from '../screens/Onboarding';



const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>

<Stack.Navigator initialRouteName='Onboarding' >

        <Stack.Screen name="AppOnboarding" component={AppOnboarding}   options={{headerShown:false}} />
        <Stack.Screen name="Landing" component={Landing}   options={{ headerShown:false}}  />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

