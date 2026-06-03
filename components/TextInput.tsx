import { ImagePlus, Search } from "lucide-react-native";
import { StyleSheet, TextInput, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../constants/COLORS";

function Input() {
  return (
    <View style={{ ...styles.container }}>
      <Search size={24} color="#C4C4C4" />
      <TextInput numberOfLines={1} style={{ ...styles.input }} />
      <ImagePlus size={24} color="#C4C4C4" />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(16),
    height: vs(40),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    borderWidth: 1,
    gap: 5,
    borderColor: "#E1E1E1",
  },
  input: {
    flex: 1,
    height: "100%",
    backgroundColor: "trensparent",
    borderWidth: 0,
  },
});
