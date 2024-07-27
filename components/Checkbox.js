import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable onPress={() => setChecked(!checked)}>
      <Ionicons
        name={checked ? "checkbox" : "square-outline"}
        size={24}
        color={checked ? "black" : "gray"}
      />
    </Pressable>
  );
}
