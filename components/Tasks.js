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
  Button,
} from "react-native";
import Task from "./task";

export default function Tasks({ navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  {
    /*Add task or warn if text field is empty*/
  }
  const handleAddTask = () => {
    if (task != null) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    } else {
      Keyboard.dismiss();
      alert("Empty task!");
    }
  };
  {
    /*Delete task if X is pressed*/
  }
  const deleteTask = (index) => {
    console.log("amers" + index);
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      {/*Today's tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        {/*Task items */}
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <Task
                key={index}
                text={item}
                indexDelete={index}
                handleDelete={deleteTask}
              />
            );
          })}
        </View>
      </View>
      {/*Writing a task*/}

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          style={styles.textInput}
          placeholder={"Write your task here!"}
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={() => handleAddTask()}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  items: { marginTop: 30 },
  writeTask: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    paddingVertical: 15,
    width: "70%",
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {},
  navButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
