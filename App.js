import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './src/screens/Landing'
import Onboarding from './src/screens/Onboarding';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

<Stack.Navigator initialRouteName='Onboarding' >

        <Stack.Screen name="Landing" component={Landing}   options={{ title: "Landing" }} />
        <Stack.Screen name="Onboarding" component={Onboarding}   options={{ title: "Onboarding" }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
