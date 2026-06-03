import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { ClipboardClock, House, Search, Settings } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/COLORS";

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  const icons = {
    index: (props: any) => <House {...props} />,
    Aichat: (props: any) => <Search {...props} />,
    History: (props: any) => <ClipboardClock {...props} />,
    Setting: (props: any) => <Settings {...props} />,
  };

  return (
    <View style={{ ...styles.tabbar }} pointerEvents="box-none">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            // onLongPress={onLongPress}
          >
            {icons[route.name]({
              color: isFocused ? COLORS.purple : COLORS.dark,
              size: 24,
              style: {
                transform: [
                  {
                    scale: isFocused ? 1.06 : 1,
                  },
                ],
              },
            })}
            <Text
              style={{
                color: isFocused ? COLORS.purple : COLORS.dark,
                fontSize: 16,
              }}
            >
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    width: "100%",
    height: 100,
    // position: "absolute",
    // bottom: 25,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: "100%",
  },
});
