import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
  persist: {
    enabled: true,
  },
});

// strategies
interface PersistStrategy {
  key?: string; // Storage key
  storage?: Storage; // Actual storage (default: sessionStorage)
  paths?: string[]; // list ok state keys you want to store in the storage
}
