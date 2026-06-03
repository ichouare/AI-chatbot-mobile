import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../constants/COLORS";

function Message() {
  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.msg }}> What is chatbot AI ? </Text>
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    minHeight: vs(50),
    paddingVertical: vs(16),
    paddingHorizontal: s(16),
    // borderWidth: 1,
    gap: 5,
    backgroundColor: COLORS.lightGray,
  },
  msg: {
    fontSize: 24,
    fontFamily: "light",
    color: COLORS.dark,
  },
});
