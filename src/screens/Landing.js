import { View, Text,Button,SafeAreaView } from 'react-native'
import React from 'react'

export default function Landing({navigation}) {
  return (
    <SafeAreaView>
        
      <Text>landing page gdsc uok </Text>
      <Button onPress={() => navigation.navigate('Onboarding')} title="go to onboardingggg" />

    </SafeAreaView>
  )
}