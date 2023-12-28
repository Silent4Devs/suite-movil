import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Lato_100Thin,
  Lato_400Regular,
  Lato_700Bold
} from "@expo-google-fonts/lato";
import { AppLoading } from "expo-app-loading";
import { Asset } from "expo-asset";
import { EStyleSheet } from "react-native-extended-stylesheet";
import Constants from "expo-constants";
require("./src/theme");

export default function App({ appName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        {appName}
      </Text>
    </View>
  );
}

App.defaultProps = {
  appName: Constants.expoConfig.name
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    fontSize: 60
  }
});
