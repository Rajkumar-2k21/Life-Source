import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import ResetPassImage from "../../assets/ResetPassword.png";
class ResetPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={ResetPassImage}></Image>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            keyboardType="default"
            name="Password"
            placeholder="New password"
            maxLength={40}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="default"
            name="fullname"
            placeholder="Confirm new password"
            maxLength={40}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
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
    height: 250,
    position: "relative",
    left: 36,
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
  button: {
    backgroundColor: "red",
    width: 300,
    marginTop: 10,
    marginLeft: 45,
    padding: 8,
  },
});

export default ResetPassword;
