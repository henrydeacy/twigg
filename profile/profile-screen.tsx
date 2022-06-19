import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export function Profile({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title="Photos" onPress={() => navigation.navigate("Photos")} />
      <Button
        title="About you"
        onPress={() => navigation.navigate("About you")}
      />
      <Button
        title="About me"
        onPress={() => navigation.navigate("About me")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    alignItems: "center",
    justifyContent: "center",
  },
});
