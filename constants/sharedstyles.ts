import { StyleSheet } from "react-native";
import { COLORS } from "./COLORS";


export const sharedStyles = StyleSheet.create({
    smallbtn: {
       width: 145,
        height: 50,
        borderRadius: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        backgroundColor: COLORS.dark

    },
    bigbtn: {
      width: "100%",
      height: 60,
       flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        borderRadius: 30,
        backgroundColor: COLORS.purple
    },
    h1: {
        fontFamily: "extraBold",
        fontSize: 40,
        lineHeight: 45,
    },
    h3 : {
        fontFamily: "light",
        fontSize: 25,
        lineHeight: 40,
    }
})