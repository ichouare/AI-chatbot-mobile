import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { Circle, CircleCheck, MoveLeft } from "lucide-react-native";
import { PressableScale } from "pressto";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/COLORS";
import { languages } from "../../constants/Data";
import { useClientStore } from "../../store/store";

export default function Language() {
  const router = useRouter();
  const lang = useClientStore((state) => state.lang);
  const setlang = useClientStore((state) => state.setlang);
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Language"
        leftNode={
          <PressableScale onPress={() => router.back()}>
            <MoveLeft size={32} />
          </PressableScale>
        }
        rightNode={<View></View>}
      />
      <View style={styles.container}>
        <View style={{ ...styles.select }}>
          {languages?.map((item) => (
            <View style={{ ...styles.item }} key={item.code}>
              <Text style={{ ...styles.itemText }}>{item.name}</Text>
              {item.code === lang ? (
                <CircleCheck fill={COLORS.purple} size={40} />
              ) : (
                <PressableScale onPress={() => setlang(item.code)}>
                  <Circle size={40} />
                </PressableScale>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: "Medium",
    fontSize: 20,
    color: COLORS.dark,
    marginBottom: 16,
  },
  text: {
    fontFamily: "light",
    fontSize: 20,
    color: COLORS.lightGray,
    lineHeight: 30,
    marginBottom: 12,
  },
  select: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 16,
    gap: 10,
  },
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  },
  itemText: {
    fontSize: 24,
    fontFamily: "Medium",
    color: COLORS.dark,
  },
});
