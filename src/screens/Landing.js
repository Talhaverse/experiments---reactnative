import { View, Text,Button,SafeAreaView } from 'react-native'
import React from 'react'

export default function Landing({navigation}) {
  return (
    <SafeAreaView>
        
      <Text>landing page </Text>
      <Button onPress={() => navigation.navigate('Onboarding')} title="button" />
    </SafeAreaView>
  )
}