
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInputBase,
  TextInput,

} from "react-native";
import { colors } from "../../colors";

interface AboutMeComponentProps {
    aboutMes: boolean[] | undefined
    setAboutMes: React.Dispatch<React.SetStateAction<boolean[] | undefined>>
}

export function AboutMeComponent (props: AboutMeComponentProps) {
    const [imagePressed, setImagePressed] = useState(false)
  return (
    <View style={styles.container}><TextInput multiline={true}         style={styles.aboutMe}
    placeholder="Add your answer here"
    keyboardType="numeric"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  aboutMe: {
    width: 360,
    height: 360,
    borderRadius: 4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    marginBottom: 30,
    padding: 5,
    width: 50,
    height: 30,
    fontSize: 20,
    fontStyle: { color: colors.white },
    backgroundColor: colors.blue,
    borderRadius: 8,
    display: 'flex',
    alignItems: "center",
    position: "absolute"
  },
 deleteText:
  { color: colors.white,
    textAlignVertical: 'center'}
});
