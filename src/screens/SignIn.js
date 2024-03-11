import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth } from "../../config/firebase";
import {signInWithEmailAndPassword} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)


  const handleSignIn = async() => {
    // Add your sign-in logic here
setLoading(true)
    if(email && password) {
      try {
        await signInWithEmailAndPassword(auth,email,password)
      } catch (error) {
        setError(error.message)
        console.log("got error: " , error.message)
      }
    }

    console.log("Signing in with:", email, password);
    setLoading(false)
  };



  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/4873152.jpg")}
      >
        <KeyboardAwareScrollView>
          <LottieView
            source={require("../../assets/animations/Animation5.json")}
            autoPlay
            loop
            style={{ height: 400, width: 400 }}
          />

          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
              />
            {
              
            }
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              />
              {error && <Text style={{color:'red',paddingBottom:20}}>{error}</Text>}
            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSignIn}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            {loading && <ActivityIndicator style={{marginTop:15}} size="large" color="blue"/>}
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
  },
  signInButton: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignIn;
