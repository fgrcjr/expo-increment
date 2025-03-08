import { Text, View } from "react-native";
import { Link } from "expo-router";
import Counter from "@/components/Counter";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/settings">Settings</Link>
      <Counter></Counter>
    </View>
  );
}
