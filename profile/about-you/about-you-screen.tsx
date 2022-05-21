import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

export function AboutYou({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>
        Answer some questions to let potential matches know whether they're your
        type!
      </Text>
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
