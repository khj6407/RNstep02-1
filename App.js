import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Entypo, AntDesign, Foundation } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

class App extends React.Component {
  render() {
    return (
      <>
        <View>
          <Image
            style={styles.img}
            source={{
              url:
                "https://cdn.pixabay.com/photo/2016/12/14/13/59/ball-1906468_960_720.png"
            }}
          />
        </View>
        <LinearGradient colors={["#fff", "#0f3443"]} style={styles.container}>
          <Foundation name="trees" style={styles.leaf} />
          <Text style={styles.text}>Sign Up</Text>
          <TextInput style={styles.id} placeholder="NAME" />
          <TextInput style={styles.pw} placeholder="ID" />
          <TextInput style={styles.pw} placeholder="PHONE" />

          <TextInput
            style={styles.pw}
            placeholder="PASSWORD"
            secureTextEntry={true}
          />

          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>JOIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sns}>
            <TouchableOpacity>
              <Entypo name="facebook-with-circle" style={styles.snsIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="instagram-with-circle" style={styles.snsIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="google--with-circle" style={styles.snsIcon1} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    marginTop: 50
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
  id: {
    width: 280,
    height: 45,
    borderWidth: 2.5,
    borderColor: "#B33771",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 15,
    marginTop: 40
  },
  pw: {
    width: 280,
    height: 45,
    borderWidth: 2.5,
    borderColor: "#B33771",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 15,
    marginTop: 15
  },
  btnArea: {
    flexDirection: "row"
  },
  btn: {
    width: 100,
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: "#0a3d62",
    borderColor: "white",
    padding: 8
  },
  btnTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  leaf: {
    color: "darkgreen",
    fontSize: 30,
    fontWeight: "bold"
  },
  forgot: {
    color: "#dfe4ea",
    marginTop: 15,
    fontSize: 16
  },
  img: {
    marginTop: 20,
    width: 380,
    height: 70,
    zIndex: 99
  },
  sns: {
    flexDirection: "row",
    marginTop: 20
  },
  snsIcon: {
    fontSize: 40,
    marginRight: 30,
    color: "white"
  },
  snsIcon1: {
    fontSize: 40,
    color: "white"
  }
});

export default App;
