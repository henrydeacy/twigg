import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Welcome({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Welcome to toda!</Text>
      <Button
        title="Get started"
        onPress={() => navigation.navigate("Profile")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
