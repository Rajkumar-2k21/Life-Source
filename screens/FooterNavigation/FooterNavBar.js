import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Pressable, StyleSheet } from "react-native";
import HomeScreen from "../Homescreen/HomeScreen";
import BloodRequestors from "../BloodRequesters/BloodRequestors";
import MyRequests from "../MyRequests/MyRequests";
import Profile from "../ProfilePage/Profile";
import Events from "../EventsPage/Events";

const Tab = createBottomTabNavigator();
const FooterNavBar = () => {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
    //   <Tab.Screen
    //     name="BloodRequestors"
    //     component={BloodRequestors}
    //   ></Tab.Screen>
    //   <Tab.Screen name="Evnets" component={Events}></Tab.Screen>
    //   <Tab.Screen name="MyRequests" component={MyRequests}></Tab.Screen>
    //   <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
    // </Tab.Navigator>
    <View>
      <Text>Helo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    bottom: 20,
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
  },
  iconbehave: {
    padding: 14,
  },
});
