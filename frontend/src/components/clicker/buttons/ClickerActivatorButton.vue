<script setup lang="ts">
import { useCounterStore } from "@/stores/counterStore.ts";

const counter = useCounterStore()

</script>

<template>
  <button @click="() => counter.increment()"> Quit! </button>
</template>
