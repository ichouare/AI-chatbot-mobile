import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { MoveLeft } from "lucide-react-native";
import { PressableScale } from "pressto";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/COLORS";

export default function Terms() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Term & Conditions"
        leftNode={
          <PressableScale onPress={() => router.back()}>
            <MoveLeft size={32} />
          </PressableScale>
        }
        rightNode={<View></View>}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Our App Terms & Conditions</Text>
        <Text style={styles.text}>
          Welcome to our app. By using this service, you agree to follow the
          terms and conditions described below.
        </Text>
        <Text style={styles.text}>
          We collect minimal data to improve your experience, protect your
          account, and keep our platform running smoothly.
        </Text>
        <Text style={styles.text}>
          You agree not to misuse the app and to comply with all applicable
          laws, regulations, and community guidelines.
        </Text>
        <Text style={styles.text}>
          We may update these terms from time to time, and continued use of the
          app after changes means you accept the revised terms.
        </Text>
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
    color: COLORS.dark,
    lineHeight: 30,
    marginBottom: 12,
  },
});
