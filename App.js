import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput} from "react-native";

export default function App() {
  return (
    <>
      <KeyboardAvoidingView>
        <View>
          <Image source={require("./src/assets/logo.png")} />
        </View>

        <View>
          <TextInput>
            placeholder="Email"
            autocorrect={false}
            onChangeText={()=> {}}
          </TextInput>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
