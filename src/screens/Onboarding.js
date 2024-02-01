import { View,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import { Animated } from 'react-native'
import data from '../../Data/Data'
import RenderItem from '../../Components/RenderItem'


const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
     

<Animated.Flatlist
 data={data} 
 renderItem={({item,index}) => {
  return <RenderItem />
}}
keyExtractor={item => item.id}
scrollEventThrottle={16}
horizontal={true}
bounces={false}
pagingEnabled={true}
showsHorizontalScrollIndicator={false}


/>

    </SafeAreaView>
  )
}


export default Onboarding

const styles = StyleSheet.create ({
container: {
  flex: 1,
},

})