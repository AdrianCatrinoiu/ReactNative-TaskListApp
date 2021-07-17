import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  onPress,
} from "react-native";
import axios from "axios";
import { setString } from "../utils/async";
import { UserStateContext, UserProfileContext } from "../utils/contexts";

export default function Start({ navigation }) {
  const { setUserToken } = React.useContext(UserStateContext);
  const { setUserProfile } = React.useContext(UserProfileContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async () => {
    const loginResponse = await axios.post("http://46.101.226.169/auth/login", {
      email,
      password,
    });
    if (loginResponse.data.status === "Success") {
      // await setString("isLoggedIn", "true");
      // navigation.navigate("Tasks");

      setUserToken(true);
      setUserProfile(loginResponse.data.data);
    }

    // console.log(loginResponse);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="grey"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="grey"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.register_button}
          onPress={() => navigation.navigate("Register")}
        >
          Don't have an account already? Register one now!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => doLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  register_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f0f0f0",
  },
});
