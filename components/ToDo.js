import { Text, View } from "react-native";
import Item from "./Item";

export default function ToDo({ array, remove, move }) {
  return (
    <View className="mt-6">
      <Text className="text-3xl font-medium mb-6">To Do</Text>
      {array.map((title, index) => (
        <Item
          key={index}
          title={title}
          remove={remove}
          index={index}
          move={move}
        />
      ))}
    </View>
  );
}
