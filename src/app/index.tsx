import Button from "@/components/Button";
import { Redirect } from "expo-router";
import { ArrowRightCircle, BotMessageSquare } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/COLORS";
import { images } from "../../constants/images";
import { sharedStyles } from "../../constants/sharedstyles";
import { useClientStore } from "../../store/store";

export default function OnboardingScreen() {
  const isFirstTime = useClientStore((state) => state.firstTime);
  const setIsfirstTime = useClientStore((state) => state.setFirstTime);
  if (isFirstTime) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <View style={styles.container}>
      <Button
        href={"/"}
        title="infoBot"
        leftIcon={<BotMessageSquare color={COLORS.white} />}
        style={{ ...sharedStyles.smallbtn, alignSelf: "flex-start" }}
        titleStyle={{
          color: COLORS.white,
          fontFamily: "light",
          fontSize: 24,
        }}
      />
      <Text style={sharedStyles.h1}>
        This AI chatbot is the best in the world and has fun concept
      </Text>
      <Text style={sharedStyles.h3}>
        Beyond Conversation Discover a New Level of Interaction
      </Text>
      <View style={styles.image}>
        <Image
          alt="Bot"
          source={images.bot}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <Button
        title="Get Started"
        onPress={() => setIsfirstTime()}
        style={sharedStyles.bigbtn}
        titleStyle={{ fontFamily: "Medium", fontSize: 26, color: COLORS.white }}
        rightIcon={
          <ArrowRightCircle
            size={60}
            fill={COLORS.white}
            color={COLORS.purple}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 16,
    rowGap: 30,
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: "Medium",
    fontSize: 24,
  },
  image: {
    flex: 1,
    width: "100%",
    minHeight: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
