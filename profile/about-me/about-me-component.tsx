
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,

} from "react-native";
import { colors } from "../../colors";

interface AboutMeComponentProps {
    aboutMes: boolean[] | undefined
    setAboutMes: React.Dispatch<React.SetStateAction<boolean[] | undefined>>
}

export function AboutMeComponent (props: AboutMeComponentProps) {
    const [imagePressed, setImagePressed] = useState(false)
  return (
    <View style={styles.container}><TouchableOpacity onPress={()=>{setImagePressed(!imagePressed)}}><Image
      style={styles.aboutMe}
      source={{
        uri: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      }}
    /></TouchableOpacity>{imagePressed && <View style={styles.delete}>
    <TouchableOpacity onPress={props.aboutMes ? ()=> {props.setAboutMes(undefined)}: ()=> null}><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
  </View>}</View>
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
