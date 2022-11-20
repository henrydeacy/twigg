import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../colors";

interface PhotoComponentProps {
  photos: boolean[] | undefined;
  setPhotos: React.Dispatch<React.SetStateAction<boolean[] | undefined>>;
}

export function PhotoComponent(props: PhotoComponentProps) {
  const [imagePressed, setImagePressed] = useState(false);
  const [image, setImage] = useState("000000");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setImagePressed(!imagePressed);
        }}
      >
        <Image
          style={styles.photo}
          source={{
            uri: image
          }}
        />
      </TouchableOpacity>
      {imagePressed && (
        <View style={styles.buttons}>
          <View style={styles.delete}>
            <TouchableOpacity
              onPress={
                props.photos
                  ? () => {
                      props.setPhotos(undefined);
                    }
                  : () => null
              }
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.delete}>
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.deleteText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 5
  },
  photo: {
    width: 360,
    height: 360,
    borderRadius: 4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  delete: {
    marginBottom: 30,
    padding: 5,
    width: 60,
    height: 30,
    fontSize: 20,
    fontStyle: { color: colors.white },
    backgroundColor: colors.green,
    borderRadius: 8,
    display: "flex",
    alignItems: "center"
  },
  deleteText: { color: colors.white, textAlignVertical: "center" },
  buttons: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute"
  }
});
