import { View, Text,Button } from 'react-native'
import React from 'react'

export default function Landing({navigation}) {
  return (
    <View>
      <Text>landing</Text>
      <Button onPress={() => navigation.navigate('Onboarding')} title="button" />
    </View>
  )
}