import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "./navigation/MyTabBar";
import Tasks from "./components/Tasks";
import Profile from "./components/Profile";
import {
  UserStateContext,
  userProfileContext,
  UserProfileContext,
} from "./utils/contexts";
export default function App() {
  const Tab = createBottomTabNavigator();

  const [userToken, setUserToken] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const userContext = { userToken, setUserToken };
  const userProfileContext = { userProfile, setUserProfile };

  return (
    <UserStateContext.Provider value={userContext}>
      <UserProfileContext.Provider value={userProfileContext}>
        <NavigationContainer>
          <MyTabBar></MyTabBar>
        </NavigationContainer>
      </UserProfileContext.Provider>
    </UserStateContext.Provider>
  );
}

const styles = StyleSheet.create({});
