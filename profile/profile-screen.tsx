import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Profile({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Photos" />
      <Button title="About you" />
      <Button title="About me" />
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
