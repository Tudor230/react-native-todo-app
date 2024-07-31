import AsyncStorage from "@react-native-async-storage/async-storage";
const keyTODO = "TODO";
const keyCOMPLETED = "COMPLETED";
export const getTODO = async () => {
  try {
    const value = await AsyncStorage.getItem(keyTODO);
    return value !== null ? JSON.parse(value) : [];
  } catch (e) {
    return [];
  }
};

export const getCompleted = async () => {
  try {
    const value = await AsyncStorage.getItem(keyCOMPLETED);
    return value !== null ? JSON.parse(value) : [];
  } catch (e) {
    return [];
  }
};

export const storeData = async (value) => {
  try {
    const currentData = await getData();
    currentData.push(value);
    await AsyncStorage.setItem(keyTODO, JSON.stringify(currentData));
  } catch (e) {
    console.error(e);
  }
};

export const removeData = async (index) => {
  try {
    let currentData = await getData();
    currentData.splice(index, 1);
    await AsyncStorage.setItem(keyTODO, JSON.stringify(currentData));
  } catch (e) {
    // saving error
  }
};

export const moveData = async (index) => {
  try {
    let currentData = await getTODO();
    let currentCompleted = await getCompleted();
    currentCompleted.push(currentData[index]);
    currentData.splice(index, 1);
    await AsyncStorage.setItem(keyTODO, JSON.stringify(currentData));
    await AsyncStorage.setItem(keyCOMPLETED, JSON.stringify(currentCompleted));
  } catch (e) {
    console.error(e);
  }
};
