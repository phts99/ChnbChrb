import { StatusBar } from "expo-status-bar";
import React from "react";
import Signin from "./pages/Signin/styles";

export default function App() {
  return (
    <>
      <Signin/>
      <StatusBar style="light" />
    </>
  );
}
