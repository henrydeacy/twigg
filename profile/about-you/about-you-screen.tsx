import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { colors } from "../../colors";
import { AboutYouComponent } from "./about-you-component";

export function AboutYou({ navigation }: any) {
  const [aboutYous, setAboutYous] = useState<boolean[]>();
  const renderItem = () => (
<AboutYouComponent aboutYous={aboutYous} setAboutYous={setAboutYous}/>
);
  return (
      <SafeAreaView style={styles.container}>
      {(!aboutYous || aboutYous.length < 8) && (
        <View style={styles.plus}>
          <TouchableOpacity
            onPress={() => {
              aboutYous ? setAboutYous([...aboutYous, true]) : setAboutYous([true]);
            }}
       
          ><Text style={styles.plusText}>Add</Text></TouchableOpacity>
            <FlatList
              data={aboutYous}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
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
    backgroundColor: colors.white,
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
    fontStyle: { color: colors.white },
    backgroundColor: colors.pink,
    borderRadius: 8,
    display: 'flex',
    alignItems: "center"
  },
  plusText:
  { color: colors.white,
    textAlignVertical: 'center'}
});