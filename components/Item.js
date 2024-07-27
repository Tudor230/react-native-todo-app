import { Pressable, Text, View } from "react-native";
import Checkbox from "./Checkbox";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Item() {
  return (
    <View className="flex-row items-center">
      <Checkbox />
      <Text className="flex-1 px-3" numberOfLines={1}>
        Item
      </Text>
      <Pressable
        onPress={() => {
          alert("Pressed");
        }}
      >
        <FontAwesome6 name="trash" size={24} color="black" />
      </Pressable>
    </View>
  );
}
