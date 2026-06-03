import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../constants/COLORS";
import { sharedStyles } from "../constants/sharedstyles";
import Button from "./Button";

type Tprops = {
  [key: string]: string;
};
export function CardPrompt({ prompt, bg }: Tprops) {
  return (
    <View style={{ ...styles.container, backgroundColor: bg }}>
      <Text style={{ ...styles.prompt }}> {prompt} </Text>
      <Button
        title="Use this Prompt"
        style={{
          ...sharedStyles.bigbtn,
          AlignItem: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
          alignSelf: "flex-end",
        }}
        titleStyle={{
          fontSize: 18,
        }}
      />
    </View>
  );
}

export default CardPrompt;

const styles = StyleSheet.create({
  container: {
    height: vs(200),
    maxWidth: s(200),
    flex: 1,
    borderRadius: 15,
    backgroundColor: "red",
    justifyContent: "space-evenly",

    padding: 16,
  },
  prompt: {
    flex: 1,
    fontSize: 28,
    fontFamily: "light",
    color: COLORS.dark,
    lineHeight: 32,
    wordWrap: "wrap",
    marginBottom: 16,
  },
});
