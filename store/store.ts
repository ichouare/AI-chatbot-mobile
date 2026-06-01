import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

type TclientStore = {
  lang: string,
  firstTime: boolean,
  setlang: (newlang: string) => void,
  setFirstTime: () => void,
}

export const useClientStore = create<TclientStore>()(persist(((set, get) => ({
  lang: "en",
  firstTime: false,
  setlang: (newlang) => set({
    lang: newlang
  }),
  setFirstTime: () => set({
      firstTime: true
  })
})), {
  name: "client",
  storage: createJSONStorage(() => AsyncStorage),
}))