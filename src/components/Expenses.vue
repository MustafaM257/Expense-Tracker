<template>
  <dl
    class="grid w-full max-w-3xl grid-cols-1 gap-px mx-auto bg-gray-900/5 sm:grid-cols-2"
  >
    <div
      v-for="stat in stats"
      :key="stat.name"
      class="flex flex-wrap items-baseline justify-between px-4 py-10 bg-white gap-x-4 gap-y-2 sm:px-6 xl:px-8"
    >
      <dt class="text-sm font-medium leading-6 text-gray-500">
        {{ stat.name }}
      </dt>
      <dd
        :class="[
          stat.changeType === 'negative' ? 'text-rose-600' : 'text-green-600',
          'text-xs font-medium',
        ]"
      >
        {{ stat.change }}
      </dd>
      <dd
        class="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-gray-900"
      >
        {{ stat.value }}
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
const stats = [
  {
    name: "Revenue",
    value: "$405,091.00",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Expenses",
    value: "$30,156.00",
    change: "+10.18%",
    changeType: "negative",
  },
];
</script>
