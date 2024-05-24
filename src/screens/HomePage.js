import { View, Text,Button,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { auth } from '../../config/firebase';
import {signOut} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";



const HomePage = () => {
  
  const navigation = useNavigation();
  
  const handleLogout = async ()=> {
  
  await signOut(auth);
}

  return (
    <SafeAreaView>
      <Text>  we will think of what coming here agian now </Text>
      <Button  onPress={handleLogout} title="logout" />
    </SafeAreaView>
  )
}

export default HomePage