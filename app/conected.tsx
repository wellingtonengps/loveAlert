import { ButtonCustom } from "@/components/ButtonCustom";
import { TextInputCustom } from "@/components/TextInputCustom";
import { Link, useNavigation } from "expo-router";
import { Button, Text, View, Image, Pressable } from "react-native";
import { StyleSheet, Platform } from "react-native";
import * as Crypto from "expo-crypto";
//import { registerForPushNotificationsAsync } from "@/components/notification/Notification";
import { useState } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as Clipboard from "expo-clipboard";
import { Feather } from "@expo/vector-icons";

function handleRegistrationError(errorMessage: string) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

export async function registerForPushNotificationsAsync() {
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      handleRegistrationError(
        "Permission not granted to get push token for push notification!"
      );
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError("Project ID not found");
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  } else {
    handleRegistrationError("Must use physical device for push notifications");
  }
}

export default function Conected() {
  const navigation = useNavigation();
  const [ID, setID] = useState("");

  registerForPushNotificationsAsync()
    .then((token) => setID(token ?? ""))
    .catch((error: any) => setID(`${error}`));

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(ID);
  };

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
          Seu código: <Text style={styles.textBold}>{ID}</Text>
          <Pressable onPress={copyToClipboard}>
            <Feather name="clipboard" size={24} color="black" />
          </Pressable>
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
