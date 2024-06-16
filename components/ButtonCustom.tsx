import { useNavigation } from "expo-router";
import React from "react";
import { Text, StyleSheet, Pressable, Alert } from "react-native";

type ButtonCustomProps = {
  title: string;
  onPress: () => void;
};

export function ButtonCustom(props: ButtonCustomProps) {
  const navigation = useNavigation();

  const { onPress, title = "Save" } = props;
  return (
    <Pressable
      style={styles.button}
      onPress={() => Alert.alert("Simple Button pressed")}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 54,
    //width: 126,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    //elevation: 3,
    backgroundColor: "#ED5C4C",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});
