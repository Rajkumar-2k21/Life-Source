import React from "react";
import { View, Text, Image } from "react-native";

import { StyleSheet } from "react-native";

function MainLayout({ children }) {
  return (
    <View style={styles.container}>
      <View
        sx={{
          height: "100vh",
        }}
        item
        xs={10}
      >
        {children}
      </View>

      <View item xs={2} sx={{ height: "100vh" }}>
        <BottomNavBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default MainLayout;
