import { View, Text,Button,SafeAreaView,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const HomePage = () => {
  
  const navigation = useNavigation();
  
  

  return (
    <SafeAreaView>
      <Text>  we will think of what coming here again now </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomePage