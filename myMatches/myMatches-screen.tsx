import Auth from "@aws-amplify/auth";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export function MyMatches({ navigation, signOut }: any) {
  const [userAttributes, setUserAttributes] = useState({
    username: ''
  })

  useEffect(() => {
    const fetchAttributes = async () => {
    const attributes = await Auth.currentAuthenticatedUser()
    setUserAttributes({username: attributes.username})}
    fetchAttributes()
  }, []
  )
  
  return (
    <View style={styles.container}>
        <Text>My matches</Text>
      <StatusBar style="auto" />
      <Text>{userAttributes.username} okay</Text>
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
