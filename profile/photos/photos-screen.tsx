import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import PhotoUpload from "react-native-photo-upload";

export function Photos({ navigation }: any) {
  const [photos, setPhotos] = useState([true, true, true]);
  return (
    <View style={styles.container}>
      <Text>Add some photos of yourself here:</Text>
      {photos.map((photo) => (
        <Image
          style={styles.photo}
          source={{
            uri: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
          }}
        />
      ))}
      <StatusBar style="auto" />
    </View>
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
    width: 100,
    height: 100,
    padding: 10,
    border: "2px solid",
    borderColor: "#000",
    borderRadius: 4,
    margin: 10,
  },
});
