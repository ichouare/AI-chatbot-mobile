import { Send } from "lucide-react-native";
import { PressableOpacity } from "pressto";
import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../constants/COLORS";

export default function Sendbtn() {
  return (
    <PressableOpacity style={{ ...styles.container }}>
      <Send color={COLORS.white} size={20} />
    </PressableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: s(40),
    paddingVertical: vs(10),
    // height: vs(40),
    borderRadius: 25,
    backgroundColor: COLORS.purple,
    alignItems: "center",
    justifyContent: "center",
  },
});
