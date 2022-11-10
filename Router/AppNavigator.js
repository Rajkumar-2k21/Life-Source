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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
          headerShown: false,
          headerTitle: "Home",
          tabBarIcon: () => {
            <Icon icon="home" />;
          },
        }}
        component={HomeScreen}
      ></Tab.Screen>
      <Tab.Screen
        name="BloodRequestors"
        component={BloodRequestors}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen name="MyRequests" component={MyRequests}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
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
