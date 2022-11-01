import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LoginImage from "../../../assets/login.png";
function Login({ navigation }) {
  const clickHandler = () => {
    navigation.replace("Register");
  };
  const navforgotpass = () => {
    navigation.navigate("Forgot Password");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={LoginImage}></Image>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          name="EmailID"
          placeholder="Enter your email id"
          maxLength={40}
        ></TextInput>
        <TextInput
          style={styles.input}
          keyboardType="default"
          name="Password"
          placeholder="Enter your password"
          maxLength={40}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navforgotpass}>
          <Text style={{ color: "red", marginLeft: 10, marginTop: 10 }}>
            forgot password ?
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#ACB1B5", marginLeft: 10, marginTop: 10 }}>
          New to LifeSource ?{" "}
          <TouchableOpacity onPress={clickHandler}>
            <Text style={{ color: "red" }}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    marginTop: 40,
    marginLeft: 30,
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderColor: "black",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  button: {
    backgroundColor: "red",
    width: 300,
    marginTop: 20,
    marginLeft: 10,
    padding: 8,
  },
  image: {
    width: 300,
    height: 200,
    position: "relative",
    left: 34,
  },
});
export default Login;
