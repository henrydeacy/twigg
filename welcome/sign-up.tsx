import React, { useState } from 'react';
import {
  View, StyleSheet, Text, Button, ScrollView,
} from 'react-native';
import Auth from '@aws-amplify/auth';
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  textInput: {
    height: 20,
    margin: 5,
    width: 200,
    borderRadius: 0
  }
});

export default function SignUp({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [invalidMessage, setInvalidMessage] = useState('');

  const signUp = async () => {
    const validPassword = password.length > 5 && (password === repeatPassword);
    if (validPassword) {
      setInvalidMessage('');
      Auth.signUp({
        username: email,
        password: password,
        attributes: {
        email: email}
      })
        .then((data) => {
          console.log(data);
          console.log('navigation: ', navigation);
          navigation.push('Confirmation', { email });
        })
        .catch((err) => {
          if (err.message) {
            setInvalidMessage(err.message);
          }
          console.log(err);
        });
    } else {
      setInvalidMessage("Password must be equal and longer than 6 characters.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
        multiline={false} 
        placeholder="Username" 
        style={styles.textInput} 
        maxLength={24} 
        autoFocus={true}
      />
      <TextInput
        value={password}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.textInput} 
        maxLength={24} 
        autoFocus={true}
      />
      <TextInput
        value={repeatPassword}
        placeholder="Repeat password"
        onChangeText={(text) => setRepeatPassword(text)}
        secureTextEntry
        style={styles.textInput} 
        maxLength={24} 
        autoFocus={true}
      />
      <Button
        onPress={() => signUp()}
        title="Sign Up"
      />
      <Text>
        {invalidMessage}
      </Text>
    </View>
  );
}
