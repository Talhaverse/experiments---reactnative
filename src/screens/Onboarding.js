import { View, Text,Button } from 'react-native'
import React from 'react'

const Onboarding = ({navigation}) => {
  return (
    <View>
      <Text>Onboarding screens will add a onboarding library here ... test </Text>
      <Text>Onboarding screens will add a onboarding library here ... test </Text>
      <Text>Onboarding screens will add a onboarding library here ... test </Text>
      <Text>Onboarding screens will add a onboarding library here ... test </Text>
      <Button title="Onboarding screens" />

      <Button onPress={() => navigation.navigate('Landing')} title="go to landing" />


    </View>
  )
}

export default Onboarding