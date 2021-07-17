import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar } from "react-native-elements";
import { getString } from "../utils/async";
import Tasks from "../components/Tasks";
import Profile from "../components/Profile";
import Start from "../components/Start";
import Register from "../components/Register";
import { UserStateContext } from "../utils/contexts";
import { createStackNavigator } from "@react-navigation/stack";
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function MyTabBar({ state, descriptors, navigation }) {
  // const isLoggedIn = async () => {
  //   const check = await getString("isLoggedIn");
  //   console.log("Check: " + check);
  //   return check === "true";
  // };
  const { userToken } = React.useContext(UserStateContext);
  return (
    <NavigationContainer independent={true}>
      <AuthStack.Navigator initialRouteName="Authentication">
        {(!userToken && (
          <>
            <AuthStack.Screen
              name="Start"
              component={Start}
              options={{
                tabBarLabel: "Start",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <AuthStack.Screen
              name="Register"
              component={Register}
              options={{
                tabBarLabel: "Register",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </>
        )) || <AuthStack.Screen name="To Do List" component={AuthNavigator} />}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
// }

const styles = StyleSheet.create({
  navWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navButton: {
    paddingTop: 20,
    paddingBottom: 10,
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
