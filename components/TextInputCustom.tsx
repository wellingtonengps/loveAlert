import React from "react";
import { PropsWithChildren, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputBase,
  useColorScheme,
} from "react-native";

type TextInputCustomProps = {
  placeholder?: string;
  size?: "large" | "small";
};

export function TextInputCustom(props: TextInputCustomProps) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  const inputStyle =
    props.size === "small" ? styles.inputSmall : styles.inputLarge;

  return (
    <TextInput
      style={inputStyle}
      onChangeText={onChangeNumber}
      value={number}
      placeholder={props.placeholder}
      keyboardType="numeric"
    />
  );
}

const styles = StyleSheet.create({
  inputLarge: {
    height: 54,
    width: 300,
    marginTop: 8,
    borderRadius: 8,
    //borderWidth: 1,
    //elevation: 1,
    padding: 10,
    backgroundColor: "#EDC09B",
  },
  inputSmall: {
    height: 54,
    width: 200,
    marginTop: 8,
    borderRadius: 8,
    //borderWidth: 1,
    //elevation: 1,
    padding: 10,
    backgroundColor: "#EDC09B",
  },
});
