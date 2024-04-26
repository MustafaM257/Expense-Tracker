<template>
  <ul role="list" class="w-full max-w-3xl space-y-3 bg-white">
    <h3 class="py-4 text-xl font-semibold leading-6 text-center text-gray-900">
      History
    </h3>
    <li
      v-for="item in transactions"
      :key="item.id"
      class="relative flex justify-between px-4 py-4 overflow-hidden bg-white border-2 border-r-8 shadow lg:px-8 sm:px-6"
      :class="{
        'border-r-rose-600': item.amount < 0,
        'border-r-green-500': item.amount > 0,
      }"
    >
      <span class="text-lg font-semibold leading-6 text-gray-900">{{
        item.text
      }}</span>
      <span class="text-lg font-semibold leading-6 text-gray-900">{{
        item.amount < 0 ? " " + item.amount : " +" + item.amount
      }}</span>

      <button class="absolute left-0 w-6 h-6 text-neutral-900 bg-rose-600">
        x
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Transaction } from "../types/index";

const props = defineProps({
  transactions: {
    type: Array as () => Transaction[],
    required: true,
  },
});
</script>
