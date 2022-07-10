import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { colors } from "../../colors";
import { AboutMeComponent } from "./about-me-component";

export function AboutMe({ navigation }: any) {
  const [aboutMes, setAboutMes] = useState<boolean[]>();
  const renderItem = () => (
<AboutMeComponent aboutMes={aboutMes} setAboutMes={setAboutMes}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={aboutMes}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      {(!aboutMes || aboutMes.length < 5) && (
        <View style={styles.plus}>
          <TouchableOpacity
            onPress={() => {
              aboutMes ? setAboutMes([...aboutMes, true]) : setAboutMes([true]);
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
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  aboutMe: {
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
    backgroundColor: colors.blue,
    borderRadius: 8,
    display: 'flex',
    alignItems: "center"
  },
  plusText:
  { color: colors.white,
    textAlignVertical: 'center'}
});