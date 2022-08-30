import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setCustomText } from 'react-native-global-props';
import { colors } from '../colors';
import { useNavigation } from '@react-navigation/native';
import ProfileNavigator from './profileNavigator';
import FeedNavigator from './feedNavigator';
import MyMatchesNavigator from './myMatchesNavigator';

const Tab = createBottomTabNavigator();


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
        <Tab.Navigator
          initialRouteName="Profile"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.yellow,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Tab.Screen name="Profile">
            {() => <ProfileNavigator signOut={signOut} navigation={navigation} />}
          </Tab.Screen>
          <Tab.Screen name="Feed">
            {() => <FeedNavigator signOut={signOut} navigation={navigation} />}
          </Tab.Screen>
          <Tab.Screen name="My matches">
            {() => <MyMatchesNavigator signOut={signOut} navigation={navigation} />}
          </Tab.Screen>
        </Tab.Navigator>
    );
  }