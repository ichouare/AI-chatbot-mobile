import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { PressableScale } from "pressto";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants/COLORS";
import { setting, touch } from "../../../constants/Data";

export default function Setting() {
  const router = useRouter();
  return (
    <View style={{ ...styles.container }}>
      <Header title="Setting" />
      <View style={{ ...styles.card }}>
        {setting?.map((item) => (
          <TouchableOpacity
            onPress={() => router.push(item.url)}
            key={item.id}
            style={{ ...styles.itemsContainer }}
          >
            <View style={{ ...styles.iconCircle, backgroundColor: item.color }}>
              <item.icon color={COLORS.white} />
            </View>
            <Text style={{ ...styles.text }}>{item.title}</Text>
            <PressableScale>
              <ChevronRight />
            </PressableScale>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ ...styles.title }}>Stay in touch</Text>
      <View style={{ ...styles.card }}>
        {touch?.map((item) => (
          <TouchableOpacity key={item.id} style={{ ...styles.itemsContainer }}>
            <View style={{ ...styles.iconCircle, backgroundColor: item.color }}>
              <item.icon color={COLORS.white} />
            </View>
            <Text style={{ ...styles.text }}>{item.title}</Text>
            <PressableScale>
              <ChevronRight />
            </PressableScale>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: "Medium",
    color: COLORS.dark,
  },
  headerText: {
    fontSize: 20,
    color: COLORS.purple,
    fontFamily: "Medium",
  },
  card: {
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#F5F5F5",
    padding: 16,
    gap: 10,
  },
  itemsContainer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Medium",
    color: COLORS.dark,
    flex: 1,
  },
});
