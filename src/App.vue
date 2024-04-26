<template>
  <Header />
  <main
    class="flex flex-col items-center justify-start w-full h-screen max-w-6xl gap-6 py-10 mx-auto text-center bg-gray-500"
  >
    <Balance />
    <Expenses />
    <Transactions />
    <TransactionsForm />
  </main>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import Expenses from "./components/Expenses.vue";
import Transactions from "./components/Transactions.vue";
import TransactionsForm from "./components/TransactionsForm.vue";
</script>
