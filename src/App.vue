<template>
  <main
    class="flex flex-col items-center justify-center w-full h-screen max-w-6xl mx-auto bg-gray-300"
  >
    <Header />
    <Balance />
    <Expenses />
  </main>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import Expenses from "./components/Expenses.vue";
</script>
