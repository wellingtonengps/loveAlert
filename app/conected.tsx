import { ButtonCustom } from "@/components/ButtonCustom";
import { TextInputCustom } from "@/components/TextInputCustom";
import { Link, useNavigation } from "expo-router";
import { Button, Text, View, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import * as Crypto from "expo-crypto";

export default function Conected() {
  const navigation = useNavigation();

  const UUID = Crypto.randomUUID();
  const primeirosCaracteres = UUID.split("-")[0];

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
      <View style={styles.content}>
        <Text style={styles.text}>
          Conectado com{" "}
          <Text style={styles.textBold}>{primeirosCaracteres}</Text>
        </Text>
        <Text style={styles.info}>
          Conecte com seu amor, informando o{" "}
          <Text style={styles.textBold}>código</Text> dele
        </Text>
        <TextInputCustom placeholder="Código" size="small" />
      </View>
      <ButtonCustom title="Conectar" onPress={() => {}} />
      <Pressable onPress={() => navigation.navigate("home")}>
        <Text>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    width: 300,
  },
  textBold: {
    fontWeight: "bold",
  },
  text: {
    color: "#000000",
    fontSize: 18,
    lineHeight: 32,
    marginBottom: 60,
  },
  info: {
    color: "#000000",
    fontSize: 18,
    lineHeight: 32,
    textAlign: "center",
    marginBottom: 24,
  },
  logo: {
    width: 186,
    height: 153,
    marginBottom: -60,
  },
});
