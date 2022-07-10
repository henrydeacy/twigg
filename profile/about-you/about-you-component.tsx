
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInput,

} from "react-native";
import { Menu } from "react-native-paper";
import { colors } from "../../colors";

interface AboutYouComponentProps {
    aboutYous: boolean[] | undefined
    setAboutYous: React.Dispatch<React.SetStateAction<boolean[] | undefined>>
}

export function AboutYouComponent (props: AboutYouComponentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {setIsOpen(true)}
  const closeMenu = () => {setIsOpen(false)}
  const questionsList = ["You're exactly my type if...", "I'm looking for someone who...", "For our first date let's...", "A green flag for me is...", "A red flag for me is...", "My family will love you if...", "Tell me about a time you...", "We'll be a good match if..."]
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
  <TextInput multiline={true} style={styles.aboutYou}
  placeholder="Add your answer here"/>
  <TouchableOpacity onPress={props.aboutYous ? ()=> {props.setAboutYous(undefined)}: ()=> null}><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 5
  },
  aboutYou: {
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
