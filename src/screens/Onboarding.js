import { View,StyleSheet,SafeAreaView,Text } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';



const AppOnboarding = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles = {{paddingHorizontal:15}}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Text>hello world</Text>,
            title: 'ReactNative Experiments Hub',
            subtitle: 'Explore, Learn, and Contribute to the Latest in React Native and Expo Development.',
          },
          {
            backgroundColor: '#fff',
            image: <Text>hello world</Text>,
            title: 'ReactNative Playground',
            subtitle: 'Your Open Source Space for Trying Out, Innovating, and Collaborating on React Native and Expo Features.',
          },
          {
            backgroundColor: '#fff',
            image: <Text>hello world</Text>,
            title: 'Expo Explorer',
            subtitle: 'Dive into the World of Expo and React Native, Experiment with Cutting-edge Features, and Join the Open Source Community.',
          },
    
  ]}
/>
    </View>
  )
}


export default AppOnboarding

const styles = StyleSheet.create ({
container: {
  flex: 1,
  backgroundColor: 'white'
},

})