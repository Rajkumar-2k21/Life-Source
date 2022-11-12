import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function RequestBlood() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.con}>
          <Text>Patient Name</Text>
          <TextInput
            autoFocus={true}
            style={styles.input}
            keyboardType="default"
            name="Patient Name"
            placeholder="Enter the patient name"
            maxLength={40}
          ></TextInput>
        </View>
        <View style={styles.con}>
          <Text style={styles.text}>Attender Name</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            name="Attender Name"
            placeholder="Enter the Attender name"
            maxLength={40}
          ></TextInput>
        </View>
        <View style={styles.con}>
          <Text style={styles.text}>Attender Ph.No</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            name="Attender Phone number "
            placeholder="Enter the Attender Ph.No"
            maxLength={40}
          ></TextInput>
        </View>
        <View style={styles.con}>
          <Text style={styles.text}>Alternative Ph.No</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            name="Alternative number "
            placeholder="Enter the Alternative number"
            maxLength={40}
          ></TextInput>
        </View>
        <View style={styles.con}>
          <Text style={styles.text}>Blood Group</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            name="Alternative number "
            placeholder="Enter the Alternative number"
            maxLength={40}
          ></TextInput>
        </View>
        <View style={styles.con}>
          <Text style={styles.text}>Patient Name</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            name="Patient Name"
            placeholder="Enter the patient name"
            maxLength={40}
          ></TextInput>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>SUBMIT</Text>
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
  form: {
    marginTop: 35,
    marginLeft: 30,
  },
  con: {
    margin: 12,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "black",

    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  button: {
    backgroundColor: "red",
    width: 300,
    marginTop: 20,
    marginLeft: 43,
    padding: 8,
  },
});
export default RequestBlood;
