/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from "pinia";

export const useUseInfoStore = defineStore("userInfo", {
  state: () => ({
    token: "",
    userInfo: {
      name: undefined,
      id: undefined,
    },
  }),
  getters: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    name(): any {
      return this.userInfo?.name;
    },
    id(): any {
      return this.userInfo?.id;
    },
  },
  actions: {
    setUserInfo(user: object) {
      this.userInfo = {
        ...user,
      };
    },
    setToken(token: string) {
      this.token = token;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "userInfo",
        paths: ["name", "id", "token"],
      },
    ],
  },
});

// strategies
interface PersistStrategy {
  key?: string; // Storage key
  storage?: Storage; // Actual storage (default: sessionStorage)
  paths?: string[]; // list ok state keys you want to store in the storage
}
