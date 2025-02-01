<script setup lang="ts">
import { computed } from "vue";
import { useCounterStore } from "@/stores/counterStore.ts";

const counter = useCounterStore()
const count = computed(()  => counter.count)
</script>


<template>
  <h4>{{ count }}</h4>
</template>
