import { Auth } from "@aws-amplify/auth";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../colors";

export function Welcome({ navigation, signIn: signInCb  }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  const signIn = async () => {
    if (email.length > 4 && password.length > 2) {
      await Auth.signIn(email, password)
        .then((user) => {
          signInCb(user);
        })
        .catch((err) => {
          if (!err.message) {
            console.log('1 Error when signing in: ', err);
            Alert.alert('Error when signing in: ', err);
          } else {
            if (err.code === 'UserNotConfirmedException') {
              console.log('User not confirmed');
              navigation.navigate('Confirmation', {
                email,
              });
            }
            if (err.message) {
              setErrorMessage(err.message);
            }
          }
        });
    } else {
      setErrorMessage('Provide a valid email and password');
    }
  };
  return (
    <View style={styles.container}>
      <Text>Welcome to twigg!</Text>
      <View style={styles.login}>
      <TextInput multiline={false} placeholder="Email" style={styles.textInput} maxLength={24} autoFocus={true} autoCapitalize="none" onChangeText={(text) => {setEmail(text)}}/>
      <TextInput multiline={false} placeholder="Password" style={styles.textInput} maxLength={24} autoCapitalize="none" onChangeText={(text) => {setPassword(text)}} secureTextEntry={true}/>
      </View>
      <Button
        title="Login"
        onPress={() => {signIn()}}
      />
      <Button title="Create account" onPress={()=> {navigation.push("Sign up")}}/>
      <Text>{errorMessage}</Text>
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
