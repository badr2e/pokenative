import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Pokemon() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>Pokemon {params.id}</Text>
    </View>
  );
}
