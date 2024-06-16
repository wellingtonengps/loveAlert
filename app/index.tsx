import { ButtonCustom } from "@/components/ButtonCustom";
import { TextInputCustom } from "@/components/TextInputCustom";
import { Link, useNavigation } from "expo-router";
import { Button, Text, View, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Image
        style={styles.logo}
        source={require("@/assets/images/love-alert.png")}
      />
      <View>
        <Text style={styles.text}>Digite seu nome:</Text>
        <TextInputCustom placeholder="Nome" />
      </View>
      <ButtonCustom title="Avançar" onPress={() => {}} />
      <Pressable onPress={() => navigation.navigate("conected")}>
        <Text>Avançar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
    lineHeight: 32,
  },
  logo: {
    width: 186,
    height: 153,
  },
});
