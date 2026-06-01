import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { HistoryIcon, MoveLeft } from "lucide-react-native";
import { PressableScale } from "pressto";
import { StyleSheet, View } from "react-native";

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
