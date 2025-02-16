import { ref } from "vue";
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);
  function increment() {
    count.value++;
  }
  function reset() {
    count.value = 0;
  }

  return { count, increment, reset };
});
