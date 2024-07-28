import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ToDo from "./components/ToDo";
import Form from "./components/Form";

export default function App() {
  return (
    <View className="flex-1 justify-start">
      <View className="mt-10 h-auto">
        <Text className="text-4xl font-black ml-3 mt-3">Inbox</Text>
        <View className="border-b mt-3 border-b-slate-400" />
      </View>
      <View className="flex-1 mx-3">
        <ToDo />
      </View>
      <View className="flex-1">
        <Text>Test</Text>
      </View>
      <View className="h-auto mb-16 mx-3">
        <Form />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
