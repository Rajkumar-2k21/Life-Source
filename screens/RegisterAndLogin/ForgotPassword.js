import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ForgotImage from "../../assets/forgotpass.png";
function ForgotPassword({ navigation }) {
  const verifyHandling = () => {
    navigation.navigate("Reset Password");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ForgotImage}></Image>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          name="EmailID"
          placeholder="Enter your email id"
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
            Click to generate OTP
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          name="OTP"
          placeholder="Enter the OTP"
          maxLength={40}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={verifyHandling}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 200,
    position: "relative",
    left: 60,
    top: 40,
  },
  form: {
    marginTop: 60,
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
    marginTop: 15,
    marginLeft: 14,
    padding: 8,
  },
});

export default ForgotPassword;
