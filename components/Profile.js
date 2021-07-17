import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { setString, getString } from "../utils/async";
import Task from "./task";
import { UserStateContext, UserProfileContext } from "../utils/contexts";

export default function Profile() {
  const { setUserToken } = React.useContext(UserStateContext);
  const { userProfile } = React.useContext(UserProfileContext);
  const { name, setName } = useState();

  const doLogout = async () => {
    console.log("try");
    try {
      // console.log("asdasda");
      // let strings = await getString("isLoggedIn");
      // console.log(strings);
      // await setString("isLoggedIn", "false");

      setUserToken(false);
    } catch (e) {
      console.error(e);
    }
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={() => doLogout()}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            {/*Placeholder for profile from backend */}
            <Ionicons name="happy-outline" color="black" size={100} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          {Object.keys(userProfile).map((key, index) => {
            return (
              <View>
                <Text style={styles.textUp(styles.text)}>{key}</Text>
                <Text
                  style={[
                    styles.text,
                    { fontWeight: "200", color: "#AEB5BC", fontSize: 34 },
                  ]}
                >
                  {userProfile[key]}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  logoutButton: {
    flexDirection: "row",
    left: "45%",
    top: 10,
    width: 80,
    height: 50,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  logoutText: { justifyContent: "center", alignItems: "center" },
  textUp: (text) => ({ ...text, fontWeight: "200", fontSize: 24 }),
});
