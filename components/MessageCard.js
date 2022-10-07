import React from "react";
import { StyleSheet, Text, View } from "react-native-web";

export default function MessageCard() {
  return (
    <View style={styles.messageCard}>
      <Text style={styles.messageTitle}>Titulo Mensagem</Text>
      <Text style={styles.message}>Mensagem secundaria</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageCard: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    margin: 2,
    borderColor: "gray",
    width: 320,
    height: 80,
    display: "flex",
    justofyContent: "center",
    backgroundColor: "gray",
  },
  messageTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  message: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "center",
  },
});
