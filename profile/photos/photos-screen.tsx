import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PhotoComponent } from "./photo-component";

export function Photos({ navigation }: any) {
  const [photos, setPhotos] = useState<boolean[]>();
  const renderItem = () => (
<PhotoComponent photos={photos} setPhotos={setPhotos}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add some photos of yourself here:</Text>
      <FlatList
        data={photos}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      {(!photos || photos.length < 5) && (
        <View style={styles.plus}>
          <TouchableOpacity
            onPress={() => {
              photos ? setPhotos([...photos, true]) : setPhotos([true]);
            }}
       
          ><Text style={styles.plusText}>Add</Text></TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
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
  plus: {
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
  plusText:
  { color:"#fff",
    textAlignVertical: 'center'}
});
