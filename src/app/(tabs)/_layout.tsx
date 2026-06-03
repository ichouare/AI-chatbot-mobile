import MyTabBar from "@/components/MyTabBar";
import { Tabs, useSegments } from "expo-router";

export function _layout() {
  // 1. Get the current active route segments array
  const segments = useSegments();

  // 2. Check if the user is currently on the "Aichat" screen
  // Expo router segments look like: ['(tabs)', 'Aichat']
  const shouldHideTabBar = segments.includes("Aichat" as never);
  return (
    <Tabs
      tabBar={(props) => !shouldHideTabBar && <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="Aichat"
        options={{
          title: "AI Chat",
        }}
      />
      <Tabs.Screen
        name="History"
        options={{
          title: "History",
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          title: "Setting",
        }}
      />
    </Tabs>
  );
}

export default _layout;
