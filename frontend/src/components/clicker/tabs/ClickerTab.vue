<script setup lang="ts">
import ClickerActivatorButton from "@/components/clicker/buttons/ClickerActivatorButton.vue";
import CounterDisplayer from "@/components/clicker/tabs/CounterDisplayerTab.vue";
import ResetCounterButton from "@/components/clicker/buttons/ResetCounterButton.vue";
</script>

<template>
  <div>
    <CounterDisplayer/>
    <h2>Click me each time you think about quiting you job</h2>
    <ClickerActivatorButton />
    <h2>You got a raise?</h2>
    <ResetCounterButton/>
  </div>
</template>
