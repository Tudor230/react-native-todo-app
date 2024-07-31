import { Pressable, Text, View } from "react-native";
import Checkbox from "./Checkbox";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Item({ title, remove, index, move, completed }) {
  const isCompleted = completed || false;
  return (
    <View className="flex-row items-center">
      <Checkbox move={move} index={index} completed={completed} />
      <Text className="flex-1 px-3" numberOfLines={1}>
        {title}
      </Text>
      {!isCompleted && (
        <Pressable
          onPress={() => {
            remove(index);
          }}
        >
          <FontAwesome6 name="trash" size={22} color="black" />
        </Pressable>
      )}
    </View>
  );
}
