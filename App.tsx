import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./welcome/welcome-screen";
import { Profile } from "./profile/profile-screen";
import { AboutMe } from "./profile/about-me/about-me-screen";
import { Photos } from "./profile/photos/photos-screen";
import { AboutYou } from "./profile/about-you/about-you-screen";
import { colors } from "./colors";
import { setCustomText } from 'react-native-global-props'

const Stack = createNativeStackNavigator();

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: 'Nexa Thin Italic',
    color: colors.black
  }
};

setCustomText(customTextProps)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.yellow,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: 'Nexa'
          },
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Photos" component={Photos} />
        <Stack.Screen name="About me" component={AboutMe} />
        <Stack.Screen name="About you" component={AboutYou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
