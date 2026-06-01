import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "../../constants/COLORS";

export default function RootLayout() {
  const [fontisLoad] = useFonts({
    light: require("../../assets/fonts/Roboto-Light.ttf"),
    Medium: require("../../assets/fonts/Roboto-Medium.ttf"),
    bold: require("../../assets/fonts/Roboto-Bold.ttf"),
    semiBold: require("../../assets/fonts/Roboto-SemiBold.ttf"),
    extraBold: require("../../assets/fonts/Roboto-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (!fontisLoad) {
      SplashScreen.hideAsync();
    }
  }, [fontisLoad]);

  if (!fontisLoad) return null;
  return (
    <SafeAreaProvider style={{ backgroundColor: COLORS.white }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="terms"
          options={{
            presentation: "fullScreenModal",
            animation: "slide_from_bottom",
            animationDuration: 0.5,
          }}
        />
        <Stack.Screen
          name="language"
          options={{
            presentation: "fullScreenModal",
            animation: "slide_from_bottom",
            animationDuration: 0.5,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
