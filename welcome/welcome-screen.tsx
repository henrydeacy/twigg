import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../colors";

export function Welcome({ navigation }: any) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginFailed, setLoginFailed] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Welcome to twigg!</Text>
      <View style={styles.login}>
      <TextInput multiline={false} placeholder="Username" style={styles.textInput} maxLength={24} autoFocus={true} autoCapitalize="none" onChangeText={setUsername}/>
      <TextInput multiline={false} placeholder="Password" style={styles.textInput} maxLength={24} autoCapitalize="none" onChangeText={setPassword} secureTextEntry={true}/>
      </View>
      <Button
        title="Login"
        onPress={() => {username === 'admin' && password === 'admin' ? navigation.navigate("Profile"): setLoginFailed(true)}}
      />
      {loginFailed && <Text>Unable to login.</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    display: 'flex', 
    flex: 1, 
    flexDirection: 'column', 
    margin: 10,
    maxHeight: 60},
    textInput: {
      height: 20,
      margin: 5,
      width: 200,
      borderRadius: 0
    }
});
