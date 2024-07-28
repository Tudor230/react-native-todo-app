import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Form() {
  const [text, setText] = useState("");
  return (
    <View className="flex-row">
      <View className="border-b-2 flex-1 justify-center border-b-slate-400">
        <TextInput
          className="h-5 text-lg"
          placeholder="I want to do..."
          value={text}
          onChangeText={setText}
        />
      </View>
      <Pressable className="ml-6 mr-2">
        <AntDesign name="pluscircle" size={38} color="black" />
      </Pressable>
    </View>
  );
}
