import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.taskState}>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => props.handleDelete(props.indexDelete)}
        >
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
        <View style={styles.circular}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: { maxWidth: "60%" },
  circular: {
    width: 20,
    height: 20,
    borderColor: "#55BCF6",
    borderRadius: 20,
    borderWidth: 2,
  },
  taskState: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 80,
    height: 20,
  },
  delete: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    fontSize: 20,
    color: "red",
  },
});
export default Task;
