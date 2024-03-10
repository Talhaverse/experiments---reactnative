import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {createUserWithEmailAndPassword}from 'firebase/auth'
import { auth } from "../../config/firebase";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false);
  // const [confirmPassword, setConfirmPassword] = useState("");


  const handleSignUp = async () => {
    // Add your sign-up logic here
setLoading(true);
    if(email && password) {
      try {

        
        await createUserWithEmailAndPassword(auth,email,password); 

        
      } catch (error) {
        setError(error.message)
        console.log("got error: ",error.message)
      }
    }

    console.log("Signing up with:", name, email, password);
    setLoading(false);
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
            source={require("../../assets/animations/Animation6.json")}
            autoPlay
            loop
            style={{ height: 300, width: 400 }}
          />

          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

{error && <Text style={{color:'red',paddingBottom:20}}>{error}</Text>}


            {/* <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            /> */}


            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
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
  signUpButton: {
    backgroundColor: "#27ae60", // Complementary color to the sign-in form
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

export default SignUp;
