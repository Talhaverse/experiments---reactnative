import { View, Text,SafeAreaView,ImageBackground,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/face.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to RN Experiments</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Login pressed')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Signup pressed')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Landing
