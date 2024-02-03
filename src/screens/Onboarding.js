import { View,StyleSheet,SafeAreaView,Text,Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import tw from 'twrnc'
import {useNavigation} from '@react-navigation/native'


const {width,height} = Dimensions.get('window');



const AppOnboarding = () => {

  const navigation = useNavigation();

  const handleDone  = () => {
    navigation.navigate('Landing')
 }

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles = {{paddingHorizontal:15}}
        onDone = {handleDone}
        bottomBarHighlight = {false}
        onSkip = {handleDone}
        pages={[
          {
            backgroundColor: '#ffdd95',
            image: (
              <View style={styles.lottie}>
                  <LottieView source={require('../../assets/animations/Animation1.json')} autoPlay loop style={tw`w-[200] h-[100]`} />
              </View>
            ),
            title: 'ReactNative Experiments Hub',
            subtitle: 'Explore, Learn, and Contribute to the Latest in React Native and Expo Development.',
          },
          {
            backgroundColor: '#86a7fc',
            image: (
              <View style={styles.lottie}>
                  <LottieView source={require('../../assets/animations/Animation3.json')} autoPlay loop style={tw`w-[200] h-[100]`} />
              </View>
            ),
            title: 'ReactNative Playground',
            subtitle: 'Your Open Source Space for Trying Out, Innovating, and Collaborating on React Native and Expo Features.',
          },
          {
            backgroundColor: '#96e9c6',
            image: (
              <View style={styles.lottie}>
                  <LottieView source={require('../../assets/animations/Animation2.json')} autoPlay loop style={tw`w-[200] h-[100]`} />
              </View>
            ),
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

lottie: {

  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: width * 0.9,
  height:width
  
}

})