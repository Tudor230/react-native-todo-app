import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function Checkbox({ move, index, completed }) {
  const isCompleted = completed || false;
  const checked = isCompleted;
  return (
    <Pressable
      onPress={() => {
        move(index);
      }}
    >
      {isCompleted ? (
        <Ionicons name="checkbox" size={24} color="black" />
      ) : (
        <Ionicons
          name={checked ? "checkbox" : "square-outline"}
          size={24}
          color={checked ? "black" : "gray"}
        />
      )}
    </Pressable>
  );
}
