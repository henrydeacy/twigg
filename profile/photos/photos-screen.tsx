import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import PhotoUpload from "react-native-photo-upload";

export function Photos({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Add some photos of yourself here:</Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg",
        }}
      />
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
