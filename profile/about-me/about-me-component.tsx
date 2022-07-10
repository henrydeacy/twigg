
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
    const questionsList = ["I like to relax by...", "I'll never stop talking about...", "You'll probably find me...", "My friends say that I'm...", "You'll know I like you when...", "My biggest claim to fame is...", "My guilty pleasure is...", "I still cringe at the time I..."]
    const [selectedQuestion, setSelectedQuestion] = useState(questionsList[0])
  return (
    <View style={styles.container}>
        <Menu
        style={styles.questionBar}
          visible={isOpen}
          onDismiss={closeMenu}
          anchor={<TouchableOpacity style={styles.questionBar}onPress={
           openMenu}><Text>{selectedQuestion}</Text></TouchableOpacity>}>
          {questionsList.map((question) => 
          <Menu.Item style={styles.questionBar} key={question} onPress={() => {setSelectedQuestion(question); closeMenu()}} title={question} />)}
        </Menu>
      <TextInput multiline={true} style={styles.aboutMe}
      placeholder="Add your answer here"/>
      <TouchableOpacity onPress={props.aboutMes ? ()=> {props.setAboutMes(undefined)}: ()=> null}><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
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
    height: 60,
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
},
deleteText:
{ color: colors.white,
  textAlignVertical: 'center'}
});
