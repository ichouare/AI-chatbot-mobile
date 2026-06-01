import { Image, StyleSheet, View } from "react-native";
import { images } from "../constants/images";

export function Avatar() {
  return (
    <View style={{ ...styles.container }}>
      <Image
        source={images.avatar}
        alt="avatar"
        style={{ width: "100%", height: "100%", borderRadius: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
