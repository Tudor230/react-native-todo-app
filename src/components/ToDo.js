import { Text, View } from "react-native";
import Item from "./Item";

export default function ToDo() {
  return (
    <View className="mt-6">
      <Text className="text-3xl font-medium mb-6">To Do</Text>
      <Item />
    </View>
  );
}
