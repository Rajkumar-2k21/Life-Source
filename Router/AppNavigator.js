import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/RegisterAndLogin/Register/Register";
import { StyleSheet, View, Text } from "react-native";
import Login from "../screens/RegisterAndLogin/Login/Login";
import ForgotPassword from "../screens/RegisterAndLogin/ForgotPassword";
import HomeScreen from "../screens/Homescreen/HomeScreen";
import ResetPassword from "../screens/RegisterAndLogin/ResetPassword";
import FooterNavBar from "../screens/FooterNavigation/FooterNavBar";

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
          component={HomeScreen}
          options={{
            title: "Life Source",
            headerTitleStyle: {
              position: "relative",
              marginLeft: 130,
              color: "#F24D4D",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
