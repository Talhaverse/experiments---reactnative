import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React,{useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {signOut} from 'firebase/auth'



import Landing from "../screens/Landing";
import AppOnboarding from "../screens/Onboarding";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import HomePage from "../screens/HomePage";
import useAuth from "../Hooks/useAuth";
import { auth } from '../../config/firebase';


const Stack = createNativeStackNavigator();

export default function AppNavigation () {



  const { user } = useAuth();
  const handleLogout = async ()=> {
  
    await signOut(auth);
  }

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: true,headerRight:() => (
              <Button onPress={handleLogout} title="logout" />

            ),}}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="AppOnboarding"
            component={AppOnboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
