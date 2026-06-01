import { ClipboardClock, Gift, Globe, ReceiptText, Shield, Star } from "lucide-react-native";
import { COLORS } from "./COLORS";

export const setting = [
  {
    id: "About Us",
    title: "About Us",
    icon: ClipboardClock,
    color: COLORS.purple,
    url: "/about-us"
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    color: COLORS.red,
    url: "/privacy-policy"
  },
  {
    id: "terms",
    title: "Terms of Service",
    icon: ReceiptText,
    color: COLORS.green,
    url: "/terms"
  },
  {
    id: "language",
    title: "Language",
    icon: Globe,
    color: COLORS.blue,
    url: "/language"
  }
]

export const touch = [
  {
    id: "Rate",
    title: "Rate Us",
    icon: Star,
    color: COLORS.purple,
  },
  {
    id: "Feedback",
    title: "Send Feedback",
    icon: Gift,
    color: COLORS.red,
  }
]




export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" }

]
