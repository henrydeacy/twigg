import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export function MyMatches({ navigation, signOut }: any) {
  return (
    <View style={styles.container}>
        <Text>My matches</Text>
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
    justifyContent: "center",
  },
});
