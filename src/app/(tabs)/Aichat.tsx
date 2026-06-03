import Header from "@/components/Header";
import Message from "@/components/message";
import Sendbtn from "@/components/Sendbtn";
import Input from "@/components/TextInput";
import { useRouter } from "expo-router";
import { HistoryIcon, MoveLeft } from "lucide-react-native";
import { PressableScale } from "pressto";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../../../constants/COLORS";

export default function Aichat() {
  const router = useRouter();
  return (
    <View style={{ ...styles.container }}>
      <Header
        title="Chat AI"
        leftNode={
          <PressableScale onPress={() => router.back()}>
            <MoveLeft size={32} />
          </PressableScale>
        }
        rightNode={
          <PressableScale onPress={() => router.navigate("/(tabs)/History")}>
            <HistoryIcon size={32} />
          </PressableScale>
        }
      />
      <View style={{ ...styles.chatContainer }}>
        <Message />
        <View style={{ ...styles.inputContainer }}>
          <Input />
          <Sendbtn />
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
  chatContainer: {
    flex: 1,
    position: "relative",
    paddingHorizontal: s(16),
    paddingVertical: vs(16),
  },
  inputContainer: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "90%",
    paddingHorizontal: s(8),
    paddingVertical: vs(10),
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
