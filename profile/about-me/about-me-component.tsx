
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Menu} from 'react-native-paper'
import { colors } from "../../colors";

interface AboutMeComponentProps {
    aboutMes: boolean[] | undefined
    setAboutMes: React.Dispatch<React.SetStateAction<boolean[] | undefined>>
}

export function AboutMeComponent (props: AboutMeComponentProps) {
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {setIsOpen(true)}
    const closeMenu = () => {setIsOpen(false)}
    const [selectedQuestion, setSelectedQuestion] = useState('Select a question')
  return (
    <View style={styles.container}>
        <Menu
        style={styles.questionBar}
          visible={isOpen}
          onDismiss={closeMenu}
          anchor={<TouchableOpacity style={styles.questionBar}onPress={
           openMenu}><Text>{selectedQuestion}</Text></TouchableOpacity>}>
          <Menu.Item style={styles.questionBar} onPress={() => {setSelectedQuestion("Question1"); closeMenu()}} title="Question1" />
          <Menu.Item style={styles.questionBar} onPress={() => {setSelectedQuestion("Question2"); closeMenu()}} title="Question2" />
          <Menu.Item style={styles.questionBar} onPress={() => {setSelectedQuestion("Question3"); closeMenu()}} title="Question3" />
        </Menu>
      <TextInput multiline={true} style={styles.aboutMe}
      placeholder="Add your answer here"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 5,
  },
  aboutMe: {
    width: 360,
    height: 320,
    borderRadius: 4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white
  },
questionBar: {
  backgroundColor: colors.white,
  width: 360,
  height: 30,
  margin: 10,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
}
});
