import { useRouter } from "expo-router";
import { PressableScale } from "pressto";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/COLORS";
import Badge from "./badge";

const HistoryChat = [
  {
    id: 1,
    title: "UI/UX designing",
  },
  {
    id: 2,
    title: "Mobile App Development",
  },
  {
    id: 3,
    title: "Web Development",
  },
  {
    id: 4,
    title: "Data Science",
  },
];

export default function SuggestedHistory() {
  const router = useRouter();
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.title }}>chat history</Text>
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
