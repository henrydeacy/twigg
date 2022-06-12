
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,

} from "react-native";

export function PhotoComponent({ navigation }: any) {
    const [imagePressed, setImagePressed] = useState(false)
    const width = imagePressed ? 200: 150
  return (
    <><TouchableOpacity onPress={()=>{setImagePressed(!imagePressed)}}><Image
      style={styles.photo}
      source={{
        uri: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      }}
    /></TouchableOpacity>{imagePressed && <View style={styles.delete}>
    <TouchableOpacity><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
  </View>}</>
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
    width: 150,
    height: 150,
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
    fontStyle: { color: "#fff" },
    backgroundColor: "#225555",
    borderRadius: 8,
    display: 'flex',
    alignItems: "center"
  },
 deleteText:
  { color:"#fff",
    textAlignVertical: 'center'}
});
