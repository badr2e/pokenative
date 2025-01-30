import { StyleSheet, Text, TextInput, View } from "react-native";
import { Row } from "./Row";
import { Image } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = {
  value: string;
  onChange: (s: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  const colors = useThemeColors();
  return (
    <Row
      gap={8}
      style={[styles.wrapper, { backgroundColor: colors.grayWhite }]}
    >
      <Image
        source={require("@/assets/images/search.png")}
        width={24}
        height={24}
      />
      <TextInput style={styles.input} onChangeText={onChange} value={value} />
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 16,
    height: 40,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    lineHeight: 20,
  },
});
