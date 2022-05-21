import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

export function AboutMe({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>
        Answer some questions so that potential matches can learn a bit about
        you!
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
