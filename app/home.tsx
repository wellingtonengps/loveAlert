import { ButtonCustom } from "@/components/ButtonCustom";
import { TextInputCustom } from "@/components/TextInputCustom";
import { Link, useNavigation } from "expo-router";
import {
  Button,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import * as Crypto from "expo-crypto";
import { useEffect, useState } from "react";
import { ProgressBarCustom } from "@/components/ProgressBarCustom";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();

  const [name, setName] = useState("Wellington");
  const [progress, setProgress] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function handleProgress() {
    setProgress(progress + 20);
    console.log(progress);
  }

  useEffect(() => {
    if (progress === 200) {
      setTimeout(() => {
        setModalVisible(true);
      }, 900);

      setTimeout(() => {
        setModalVisible(false);
      }, 3000);

      setTimeout(() => {
        setProgress(0);
      }, 4000);
    }
  }, [progress]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Notificação enviada para{" "}
              <Text style={styles.textBold}>{name}</Text>
            </Text>
            <MaterialIcons name="done" size={60} color="green" />
          </View>
        </View>
      </Modal>
      <View style={styles.content}>
        <Text style={styles.text}>
          Conectado <Text style={styles.textBold}>{name}</Text>
        </Text>
        <ProgressBarCustom progress={progress} />
        <Text style={styles.info}>
          Presione o botão até completar a barra de progresso
        </Text>
      </View>
      <Pressable onPress={handleProgress}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/heart-button.png")}
        />
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
  doneIcon: {
    width: 68,
    height: 68,
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
    marginTop: 40,
  },
  logo: {
    width: 360,
    height: 367,
    marginTop: -80,
    //backgroundColor: "red",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 240,
    height: 240,
    margin: 20,
    backgroundColor: "#EDC09B",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 18,
    textAlign: "center",
  },
});
