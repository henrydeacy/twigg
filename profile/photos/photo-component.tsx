
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,

} from "react-native";

export function PhotoComponent({ navigation }: any) {
    const [imagePressed, setImagePressed] = useState(false)
    const width = imagePressed ? 200: 150
  return (
    <TouchableOpacity onPress={()=>{setImagePressed(!imagePressed)}}><Image
      style={styles.photo}
      width={width}
      source={{
        uri: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      }}
    /></TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    height: 150,
    borderRadius: 4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
