<template>
  <Header />
  <main
    class="flex flex-col items-center justify-start w-full h-auto max-w-6xl gap-6 py-10 mx-auto text-center bg-gray-500"
  >
    <Balance :balance="balance" />
    <IncomeOutcome :income="income" :outcome="outcome" />
    <Transactions
      :transactions="transactions"
      @delete-transaction="handleDeleteTransaction"
    />
    <TransactionsForm @add-transaction="handleAddTransaction" />
  </main>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeOutcome from "./components/IncomeOutcome.vue";
import Transactions from "./components/Transactions.vue";
import TransactionsForm from "./components/TransactionsForm.vue";
import type { Transaction } from "./types/index";
import { ref, computed, onMounted, watch } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

const transactions = ref<Transaction[]>([]);

const balance = computed(() => {
  return transactions.value.reduce((acc, item) => acc + item.amount, 0);
});

onMounted(() => {
  const localTransactions = localStorage.getItem("transactions");
  if (localTransactions) {
    transactions.value = JSON.parse(localTransactions);
  }
});

// Income & Epenses

const income = computed(() => {
  return transactions.value
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
});
const outcome = computed(() => {
  return transactions.value
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
});
const handleAddTransaction = (transaction: Transaction) => {
  transactions.value.push(transaction);
  toast.success("Transaction created successfully!");
  saveTransactions();
};
const handleDeleteTransaction = (id: number) => {
  transactions.value = transactions.value.filter((item) => item.id !== id);
  toast.success("Transaction deleted successfully!");
  saveTransactions();
};

const saveTransactions = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>
