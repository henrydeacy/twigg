import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export function Welcome({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Welcome to twigg!</Text>
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
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
