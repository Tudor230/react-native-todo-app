import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ToDo from "./components/ToDo";
import Completed from "./components/Completed";
import Form from "./components/Form";
import {
  getTODO,
  removeData,
  storeData,
  moveData,
  getCompleted,
} from "./utility/storage";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);

  const fetchData = async () => {
    const TODO = await getTODO();
    const COMPLETED = await getCompleted();
    setTodo(TODO);
    setCompleted(COMPLETED);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const save = async (value) => {
    await storeData(value);
    fetchData();
  };

  const remove = async (index) => {
    await removeData(index);
    fetchData();
  };

  const move = async (index) => {
    await moveData(index);
    fetchData();
  };

  return (
    <View className="flex-1 justify-start">
      <View className="mt-10 h-auto">
        <Text className="text-4xl font-black ml-3 mt-3">Inbox</Text>
        <View className="border-b mt-3 border-b-slate-400" />
      </View>
      <View className="flex-1 mx-3">
        <ToDo array={todo} remove={remove} move={move} />
      </View>
      <View className="flex-1 mx-3">
        <Completed array={completed} />
      </View>
      <View className="h-12 mb-12 mx-3">
        <Form save={save} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
