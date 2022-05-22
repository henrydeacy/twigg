import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  View,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Photos({ navigation }: any) {
  const [photos, setPhotos] = useState<boolean[]>();
  const renderItem = () => (
    <Image
      style={styles.photo}
      source={{
        uri: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
      }}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add some photos of yourself here:</Text>
      <FlatList
        data={photos}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      {photos.length < 5 && (
        <View style={styles.plus}>
          <Button
            onPress={() => {
              photos ? setPhotos([...photos, true]) : setPhotos([true]);
            }}
            title="+"
          />
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
    width: 300,
    height: 300,
    borderRadius: 4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    marginBottom: 10,
  },
});
