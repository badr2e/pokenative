import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { useFetchQuery } from "@/hooks/useFetchQuery";

export default function Pokemon() {
  const params = useLocalSearchParams() as { id: string };
  const { data: pokemon } = useFetchQuery("/pokemon/[id]", { id: params.id });
  return (
    <RootView>
      <Row style={styles.header}>
        <Pressable onPress={router.back}>
          <Row gap={8}>
            <Image
              source={require("@/assets/images/back.png")}
              width={32}
              height={32}
            />
            <ThemedText color="grayWhite" variant="headline">
              {pokemon?.name}
            </ThemedText>
          </Row>
        </Pressable>
        <ThemedText color="grayWhite" variant="subtitle2">
          #{params.id.padStart(3, "0")}
        </ThemedText>
      </Row>
      <Text>Pokemon {params.id}</Text>
    </RootView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 20,
    justifyContent: "space-between",
  },
});
