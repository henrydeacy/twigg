import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomText } from 'react-native-global-props';
import { colors } from '../colors';
import { Feed } from '../feed/feed-screen';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    color: colors.black
  }
};

setCustomText(customTextProps)

export default function App({signOut}: any) {
  const navigation = useNavigation()
    return (
        <Stack.Navigator
          initialRouteName="Feed"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Feed">
          {() => <Feed signOut={signOut} navigation={navigation} />}
          </Stack.Screen>
        </Stack.Navigator>
    );
  }