import MyTabBar from "@/components/MyTabBar";
import { Tabs } from "expo-router";

export function _layout() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
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
