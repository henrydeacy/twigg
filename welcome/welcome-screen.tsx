import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Welcome({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Welcome to toda!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        Get started
      </TouchableOpacity>
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
