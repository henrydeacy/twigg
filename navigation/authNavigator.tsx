import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomText } from 'react-native-global-props';
import { colors } from '../colors';
import { Welcome } from '../welcome/welcome-screen';
import SignUp from '../welcome/sign-up';
import Confirmation from '../welcome/confirmation';

const Stack = createNativeStackNavigator();

const customTextProps = {
    style: {
      fontSize: 16,
      fontFamily: 'Helvetica-Light',
      color: colors.black
    }
  };
  
  setCustomText(customTextProps)

export default function Authorise({signIn}: any) {
    return (
        <Stack.Navigator
          initialRouteName="Welcome"
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
          <Stack.Screen name="Welcome">{({ navigation }) => <Welcome signIn={signIn} navigation={navigation} />}</Stack.Screen>
          <Stack.Screen name="Sign up" component={SignUp} />
          <Stack.Screen options={{ headerShown: false }} name="Confirmation" component={Confirmation} />
        </Stack.Navigator>
    );
  }