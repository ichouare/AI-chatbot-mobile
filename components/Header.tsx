import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../constants/COLORS";

type Tprops = {
  title?: string;
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
};

export default function Header({ title, leftNode, rightNode }: Tprops) {
  return (
    <View style={{ ...styles.container }}>
      {leftNode && leftNode}
      {title && <Text style={{ ...styles.title }}> {title} </Text>}
      {rightNode && rightNode}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: vs(70),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: s(16),
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.dark,
    fontSize: 24,
    fontFamily: "Medium",
  },
});
