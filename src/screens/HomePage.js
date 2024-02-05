import { View, Text,Button,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


const HomePage = () => {

  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <Text>HomePage</Text>
      <Button  onPress={{}} title="logout" />
    </SafeAreaView>
  )
}

export default HomePage