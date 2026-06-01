import { Avatar } from "@/components/Avatar";
import Button from "@/components/Button";
import Header from "@/components/Header";
import PopulatePrompt from "@/components/PopulatePrompt";
import SuggestedHistory from "@/components/suggestedHistory";
import { BotMessageSquare } from "lucide-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { s } from "react-native-size-matters";
import { COLORS } from "../../../constants/COLORS";
import { sharedStyles } from "../../../constants/sharedstyles";

export default function Home() {
  return (
    <View style={{ flex: 1, gap: 16, backgroundColor: COLORS.white }}>
      <Header
        rightNode={<Avatar />}
        leftNode={
          <Button
            href={"/"}
            title="infoBot"
            leftIcon={<BotMessageSquare size={42} color={COLORS.purple} />}
            style={{
              ...sharedStyles.smallbtn,
              backgroundColor: "trensparent",
              gap: 0,
            }}
            titleStyle={{
              color: COLORS.dark,
              fontFamily: "Medium",
              fontSize: 24,
            }}
          />
        }
      />
      <ScrollView
        style={{ ...styles.content }}
        contentContainerStyle={{
          gap: 16,
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ ...styles.WelcomeText }}>Hello, Issame</Text>
          <Text style={{ ...styles.question }}>How can i help you today?</Text>
          <Button
            title="New Chat"
            style={{
              ...sharedStyles.bigbtn,
              alignItems: "center",
              justifyContent: "center",
            }}
            titleStyle={{
              fontSize: 24,
              color: COLORS.white,
            }}
          />
        </View>
        <SuggestedHistory />
        <PopulatePrompt />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: s(16),
  },
  WelcomeText: {
    fontSize: 24,
    fontFamily: "Medium",
    color: COLORS.dark,
  },
  question: {
    fontSize: 18,
    fontFamily: "light",
    color: COLORS.dark,
  },
});
