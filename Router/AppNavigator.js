import React, { Component } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/RegisterAndLogin/Register/Register";
import { StyleSheet, View, Text } from "react-native";
import Login from "../screens/RegisterAndLogin/Login/Login";
import ForgotPassword from "../screens/RegisterAndLogin/ForgotPassword";
import HomeScreen from "../screens/Homescreen/HomeScreen";
import ResetPassword from "../screens/RegisterAndLogin/ResetPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BloodRequestors from "../screens/BloodRequesters/BloodRequestors";
import Events from "../screens/EventsPage/Events";
import MyRequests from "../screens/MyRequests/MyRequests";
import Profile from "../screens/ProfilePage/Profile";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RequestBlood from "../screens/RequestBlood/RequestBlood";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Reset Password" component={ResetPassword} />

        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RequestBloodPage"
          component={RequestBlood}
          options={{
            headerTitle: "Blood Request Form",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "red",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: "LifeSource",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "red",
          },
          tabBarIcon: () => {
            return <Entypo name="home" size={28} color="#344953" />;
          },
        }}
        component={HomeScreen}
      ></Tab.Screen>
      <Tab.Screen
        name="BloodRequestors"
        component={BloodRequestors}
        options={{
          tabBarIcon: () => {
            return <FontAwesome5 name="child" size={28} color="#344953" />;
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: () => {
            return <MaterialIcons name="event" color="#344953" size={28} />;
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="MyRequests"
        component={MyRequests}
        options={{
          tabBarIcon: () => {
            return (
              <FontAwesome5
                name="hand-holding-water"
                size={28}
                color="#344953"
              />
            );
          },
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <FontAwesome5 name="user-alt" size={28} color="#344953" />;
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const Icon = ({ icon }) => (
  <View>
    <FontAwesome5
      name={icon}
      size={25}
      style={{
        marginBottom: 3,

        alignSelf: "center",
      }}
    />
  </View>
);

export default AppNavigator;
