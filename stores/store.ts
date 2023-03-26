export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
      count: 0,
    }),
    getters: {
      doubleCount(): number {
        return this.count * 2
      },
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })