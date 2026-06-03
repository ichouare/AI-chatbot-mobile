import { useRouter } from "expo-router";
import { PressableScale } from "pressto";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { vs } from "react-native-size-matters";
import { COLORS } from "../constants/COLORS";
import CardPrompt from "./CardPrompt";

const ExplorerPrompts = [
  {
    id: 1,
    prompt: "suggested python code to analyze sales data",
    bg: "#E0D7FF",
  },
  {
    id: 2,
    prompt: "suggested python code to analyze marketing data",
    bg: "#D0F4FF",
  },
  {
    id: 3,
    prompt: "suggested python code to create 3D models",
    bg: "#FFE0E0",
  },
  {
    id: 4,
    prompt: "suggested python code for content creation",
    bg: "#E0FFE0",
  },
];

export default function ExplorerPrompt() {
  const router = useRouter();
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.title }}>Explore more</Text>
        <PressableScale onPress={() => router.navigate("/History")}>
          <Text style={{ ...styles.placeholder }}>Show All</Text>
        </PressableScale>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={ExplorerPrompts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardPrompt prompt={item.prompt} bg={item.bg} />
        )}
        horizontal
        // numColumns={2}
        style={
          {
            // height: vs(280),
          }
        }
        contentContainerStyle={{
          paddingVertical: vs(16),
          gap: 20,
        }}
        // ItemSeparatorComponent={<View style={{ width: 16 }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Medium",
    color: COLORS.dark,
  },
  placeholder: {
    fontSize: 16,
    fontFamily: "light",
    color: COLORS.purple,
  },
});
