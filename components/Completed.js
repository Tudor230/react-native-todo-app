import { ScrollView, Text, View } from "react-native";
import Item from "./Item";

export default function ToDo({ array }) {
  return (
    <View className="h-full">
      <Text className="text-3xl font-medium mb-6">Completed</Text>
      <ScrollView keyboardDismissMode="on-drag">
        {array.map((title, index) => (
          <Item key={index} title={title} index={index} completed={true} />
        ))}
      </ScrollView>
    </View>
  );
}
