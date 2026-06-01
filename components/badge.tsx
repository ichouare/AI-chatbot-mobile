import { useRouter } from "expo-router";
import { PressableOpacity } from "pressto";
import { StyleSheet, Text } from "react-native";
import { s, vs } from "react-native-size-matters";
import { COLORS } from "../constants/COLORS";

type Tprops = {
  title: string;
};
export default function Badge({ title }: Tprops) {
  const router = useRouter();
  return (
    <PressableOpacity
      onPress={() =>
        router.navigate({
          pathname: "/Aichat",
          params: {
            context: title,
          },
        })
      }
      style={{ ...styles.container }}
    >
      <Text style={{ ...styles.text }}> {title} </Text>
    </PressableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vs(40),
    paddingHorizontal: s(20),
    borderRadius: 45,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#E9E9E9",
  },
  text: {
    fontSize: 20,
    fontFamily: "light",
    color: COLORS.dark,
  },
});
