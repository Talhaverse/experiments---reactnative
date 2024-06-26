import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/4873152.jpg")}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 0 }}>
          <Text style={styles.title}>
            <Text style={{ fontWeight: "900", color: "#1b065e", fontSize: 35 }}>
              WELCOME!
            </Text>
            {"\n"}
            <Text style={{ fontWeight: "400", color: "#1b065e" }}>
              to ReactNative Experiments
            </Text>
          </Text>
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0197f6" }]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    paddingTop: 50,
  },

  button: {
    backgroundColor: "#006daa",
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    width: '90%',
    alignItems: 'center',
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Landing;
