import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { MessageSquareText, Trash2 } from "lucide-react-native";
import { PressableScale } from "pressto";
import { StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../../../constants/COLORS";

const DeleteAction = (progress, dragX) => {
  return (
    <View style={{ ...styles.removebtn }}>
      <Trash2 size={32} />
    </View>
  );
};

export default function History() {
  const router = useRouter();
  return (
    <View style={{ ...styles.container }}>
      <Header
        title="History"
        rightNode={
          <PressableScale onPress={() => router.navigate("/(tabs)/History")}>
            <Text style={{ ...styles.headerText }}>Clear all </Text>
          </PressableScale>
        }
      />
      <View style={{ ...styles.content }}>
        <View style={{ position: "relative", width: "100%", height: vs(70) }}>
          <Swipeable renderRightActions={DeleteAction}>
            <View style={{ ...styles.HistoryContent }}>
              <MessageSquareText size={32} />
              <Text style={{ ...styles.Historytitle }}>
                What is chatBot Ai?
              </Text>
            </View>
          </Swipeable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontSize: 20,
    color: COLORS.purple,
    fontFamily: "Medium",
  },
  content: {
    flex: 1,
    flexDirection: "row",

    paddingHorizontal: s(16),
  },
  HistoryContent: {
    width: "100%",
    height: vs(70),
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: s(16),

    zIndex: 100,
  },
  Historytitle: {
    flex: 1,
    fontSize: 24,
    fontFamily: "light",
    color: COLORS.dark,
  },
  removebtn: {
    width: s(60),
    height: vs(50),
    position: "absolute",
    top: "20%",
    right: 0,
    borderRadius: 16,
    backgroundColor: "#FFDADA",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -100,
    visibility: "hidden",
  },
});
