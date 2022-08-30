import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomText } from 'react-native-global-props';
import { colors } from '../colors';
import { Profile } from '../profile/profile-screen';
import { Photos } from '../profile/photos/photos-screen';
import { AboutMe } from '../profile/about-me/about-me-screen';
import { AboutYou } from '../profile/about-you/about-you-screen';
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
          initialRouteName="Profile"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Profile">
          {() => <Profile signOut={signOut} navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Photos" component={Photos} />
          <Stack.Screen name="About me" component={AboutMe} />
          <Stack.Screen name="About you" component={AboutYou} />
        </Stack.Navigator>
    );
  }