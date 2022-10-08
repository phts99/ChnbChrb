import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={require("./src/assets/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autocorrect={false}
          onChangeText={() => {}}
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autocorrect={false}
          onChangeText={() => {}}
        ></TextInput>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  input: {
    backgroundColor: "#FBCB2B",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
    fontFamily: "Quicksand",
  }
});
