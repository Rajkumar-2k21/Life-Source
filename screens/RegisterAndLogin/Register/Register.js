import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import RegisterImage from "../../../assets/login.png";
class Register extends React.Component {
  clickHandler = () => {
    this.props.navigation.replace("Login");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={RegisterImage}></Image>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            keyboardType="default"
            name="fullname"
            placeholder="Enter your full name"
            maxLength={40}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            name="Phonenumber"
            placeholder="Enter your phone number"
            maxLength={40}
          ></TextInput>
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
          <TextInput
            style={styles.input}
            keyboardType="default"
            name="fullname"
            placeholder="Confirm password"
            maxLength={40}
          ></TextInput>
          <Text style={styles.terms}>
            By signing up, you're agree to our{" "}
            <Text style={{ color: "red" }}>Terms & Conditions</Text>
            and <Text style={{ color: "red" }}>Privacy Policy</Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#ACB1B5", marginLeft: 10, marginTop: 10 }}>
            Joined us before ?{" "}
            <TouchableOpacity onPress={this.clickHandler}>
              <Text style={{ color: "red" }}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 200,
    position: "relative",
    left: 34,
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
  form: {
    marginTop: 15,
    marginLeft: 30,
  },
  terms: {
    color: "#ACB1B5",
    width: 350,
    marginLeft: 15,
  },
  button: {
    backgroundColor: "red",
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    padding: 8,
  },
});

export default Register;
