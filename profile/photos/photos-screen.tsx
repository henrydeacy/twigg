import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

export function Photos({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Add some photos of yourself here:</Text>
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
