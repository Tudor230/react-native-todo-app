import { Text, View } from "react-native";
import Item from "./Item";

export default function ToDo({ array }) {
  return (
    <View className="mt-6">
      <Text className="text-3xl font-medium mb-6">Completed</Text>
      {array.map((title, index) => (
        <Item key={index} title={title} index={index} completed={true} />
      ))}
    </View>
  );
}
