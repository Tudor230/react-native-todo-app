import { ScrollView, Text, View } from "react-native";
import Item from "./Item";

export default function ToDo({ array, remove, move }) {
  return (
    <View className="pt-6 h-full">
      <Text className="text-3xl font-medium mb-6">To Do</Text>
      <ScrollView keyboardDismissMode="on-drag">
        {array.map((title, index) => (
          <Item
            key={index}
            title={title}
            remove={remove}
            index={index}
            move={move}
          />
        ))}
      </ScrollView>
    </View>
  );
}
