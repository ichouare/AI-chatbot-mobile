import { useRouter } from "expo-router";
import { PressableScale } from "pressto";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/COLORS";
import Badge from "./badge";

const HistoryChat = [
  {
    id: 1,
    title: "📈 Sales",
  },
  {
    id: 2,
    title: "📢 Digital Marketing",
  },
  {
    id: 3,
    title: "🎲 3D Modeling",
  },
  {
    id: 4,
    title: "✏️ Content Creation",
  },
  {
    id: 5,
    title: "🎨 UI/UX designing",
  },
  {
    id: 6,
    title: "📱 Mobile App Development",
  },
];

export default function PopulatePrompt() {
  const router = useRouter();
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.title }}>Populate Prompt</Text>
        <PressableScale onPress={() => router.navigate("/History")}>
          <Text style={{ ...styles.placeholder }}>Show All</Text>
        </PressableScale>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={HistoryChat}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Badge title={item.title} />}
        horizontal
        // numColumns={2}
        style={{
          height: 70,
        }}
        ItemSeparatorComponent={<View style={{ width: 16 }}></View>}
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
