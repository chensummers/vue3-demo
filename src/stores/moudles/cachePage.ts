import { defineStore } from "pinia";

export const useCachePage = defineStore("cachePage", {
  state: () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cachePages: <any>[],
  }),
  getters: {},
  actions: {
    add(pageName: string) {
      const cachePages = this.cachePages;
      if (!cachePages.includes(pageName)) {
        cachePages.push(pageName);
        this.cachePages = [...cachePages];
      }
    },
    remove(pageName: string) {
      const cachePages = this.cachePages;
      if (cachePages.includes(pageName)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cachePages.filter((page: any) => page !== pageName);
        this.cachePages = [...cachePages];
      }
    },
    isCache(pageName: string) {
      return this.cachePages.includes(pageName);
    },
  },
});
