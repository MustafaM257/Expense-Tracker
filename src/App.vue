<template>
  <Header />
  <main
    class="flex flex-col items-center justify-start w-full h-auto max-w-6xl gap-6 py-10 mx-auto text-center bg-gray-500"
  >
    <Balance :balance="balance" />
    <IncomeExpense :income="income" :expenses="expense" />
    <Transactions :transactions="transactions" />
    <TransactionsForm />
  </main>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import Transactions from "./components/Transactions.vue";
import TransactionsForm from "./components/TransactionsForm.vue";
import type { Transaction } from "./types/index";
import { ref } from "vue";
import { computed } from "vue";
const transactions = ref<Transaction[]>([
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
]);

const balance = computed(() => {
  return transactions.value.reduce((acc, item) => acc + item.amount, 0);
});

// Income & Epenses
const income = computed(() => {
  return transactions.value
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
});
const expense = computed(() => {
  return transactions.value
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
});
</script>
