import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export function MyProfile({ navigation, signOut }: any) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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
      <Button onPress={() => signOut()} title="Sign out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center"
  }
});
