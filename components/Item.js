import { Pressable, Text, View } from "react-native";
import Checkbox from "./Checkbox";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Item({ title, remove, index, move, completed }) {
  const isCompleted = completed || false;
  return (
    <View className="flex-row items-center pb-4">
      <Checkbox move={move} index={index} completed={completed} />
      <Text className="flex-1 px-3 text-lg" numberOfLines={1}>
        {title}
      </Text>
      {!isCompleted && (
        <Pressable
          onPress={() => {
            remove(index);
          }}
        >
          <FontAwesome6 name="trash" size={18} color="black" />
        </Pressable>
      )}
    </View>
  );
}
