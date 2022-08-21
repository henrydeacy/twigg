import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./colors";
import { setCustomText } from 'react-native-global-props'
import { Provider } from "react-native-paper";
import config from './aws-exports';
import Amplify from '@aws-amplify/core';
import AppNavigation from './navigation';

Amplify.configure(config);

const Stack = createNativeStackNavigator();

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: 'Helvetica-Light',
    color: colors.black
  }
};

setCustomText(customTextProps)

export default function App() {
  return (
    <Provider>
      <AppNavigation />
    </Provider>
  );
}
