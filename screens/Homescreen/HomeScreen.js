import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AvatarImage from "../../assets/avatarpng.png";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import RequestBloodImage from "../../assets/blooddonation.png";

import MainLayout from "../../layout/MainLayout";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.avatarcontainer}>
          <Image source={AvatarImage} style={styles.avatar} />
        </View>
        <View style={styles.textcontainer}>
          <Text style={{ color: "#BFBFBF", fontSize: 17 }}>Good Morning,</Text>
          <Text style={{ color: "#000000", fontSize: 25 }}>Peter Parker !</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.bannerContainer}>
          <Image style={styles.image} source={Banner1} />
        </View>
        <View style={styles.bannerContainer}>
          <Image style={styles.image} source={Banner2} />
        </View>
        <View style={styles.bannerContainer}>
          <Image style={styles.image} source={Banner3} />
        </View>
      </ScrollView>
      <View>
        <Image
          style={{
            width: 180,
            height: 230,
            position: "relative",

            left: 100,
          }}
          source={RequestBloodImage}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.btntext}>Request Blood</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 100,
  },
  avatar: {
    width: 55,
    height: 55,
    position: "relative",
    left: 9,
    top: 6,
  },
  avatarcontainer: {
    borderRadius: 100,
    borderColor: "#F24D4D",
    borderStyle: "dotted",
    borderWidth: 3,
    width: 78,
    height: 78,
    marginLeft: 20,
    padding: 0,
  },
  textcontainer: {
    position: "relative",
    left: 20,
    top: 12,
    backgroundColor: "white",
    width: 200,
    height: 100,
  },
  image: {
    width: 250,
    height: 170,
  },
  bannerContainer: {
    marginTop: 35,
    marginLeft: 5,
    marginRight: 5,
    width: 255,
    height: 175,
    shadowColor: "#52006A",
    elevation: 10,
  },

  button: {
    width: 180,
    height: 30,
    backgroundColor: "#F24D4D",
    position: "relative",
    left: 100,
    borderRadius: 10,
    padding: 4,
  },
  btntext: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default HomeScreen;
