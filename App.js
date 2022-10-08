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

        <TouchableOpacity style={styles.btnForgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>
            Ainda não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>
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
  },
  btnSubmit: {
    backgroundColor: "#6FDDE3",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
    height: 45,
  },
  submitText: {
    fontWeight: "700",
    fontSize: 16,
  },
  btnRegister: {
    marginBottom: 10,
  },
  registerText: {
    fontSize: 16,
  },
  btnForgotPassword: {
    alignItems: "center",
    justifyContent: "center",
    width: "170px",
    height: "50px",
    padding: 7,
  },
  forgotPasswordText: {
    fontSize: 10,
  },
});
