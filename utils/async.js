import AsyncStorage from "@react-native-async-storage/async-storage";
export const setString = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);

    // saving error
  }
};
export const setObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);

    // saving error
  }
};

export const getString = async (key) => {
  let value;
  try {
    value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
    console.error(e);
  }
  return value;
};

export const getObject = async (key) => {
  let jsonValue;
  try {
    jsonValue = await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);

    // error reading value
  }
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
