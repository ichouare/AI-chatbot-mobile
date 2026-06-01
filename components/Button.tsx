import { ExternalPathString, RelativePathString } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { COLORS } from "../constants/COLORS";

type Tprops = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: any;
  titleStyle?: any;
  onPress?: () => void;
  href?:
    | RelativePathString
    | ExternalPathString
    | "/"
    | `/?${string}`
    | `/#${string}`
    | "/_sitemap";
};

export default function Button({
  title,
  leftIcon,
  rightIcon,
  style,
  titleStyle,
  onPress,
  href,
}: Tprops) {
  return (
    // <Link onPress={() => } asChild>
    <TouchableHighlight onPress={onPress} style={{ ...styles.container }}>
      <View
        style={{
          alignSelf: "flex-start",
          ...style,
        }}
      >
        {leftIcon && leftIcon}
        <Text style={{ ...styles.TextStyle, ...titleStyle }}> {title} </Text>
        {rightIcon && rightIcon}
      </View>
    </TouchableHighlight>
    // </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  TextStyle: {
    color: COLORS.dark,
  },
});
