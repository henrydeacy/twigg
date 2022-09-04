import Auth from "@aws-amplify/auth";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";
import  {  useCallback, useLayoutEffect } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

export function MyMatches({ navigation, signOut }: any) {
  const [userAttributes, setUserAttributes] = useState({
    username: ''
  })
  const [messages, setMessages] = useState<IMessage[]>();

  useEffect(() => {
    const fetchAttributes = async () => {
    const attributes = await Auth.currentAuthenticatedUser()
    setUserAttributes({username: attributes.username})}
    fetchAttributes()
    setMessages([
      {
          _id: 1,
          text: `Hello ${userAttributes.username}`,
          createdAt: new Date(),
          user: {
              _id: 2,
              name: 'React Native',
          },
      },
  ])
  }, []
  )
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
}, []);
  
  return (
    <View style={styles.container}>
      <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: userAttributes.username,
      }} />
      <Button onPress={() => signOut()} title="Sign out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
});
