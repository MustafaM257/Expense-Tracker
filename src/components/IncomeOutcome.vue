<template>
  <dl
    class="grid w-full max-w-3xl grid-cols-1 gap-px mx-auto bg-gray-900/5 sm:grid-cols-2"
  >
    <div
      class="flex flex-wrap items-baseline justify-between px-4 py-10 bg-white gap-x-4 gap-y-2 sm:px-6 xl:px-8"
    >
      <dt class="text-sm font-medium leading-6 text-gray-500">Income</dt>
      <dd>
        <span
          class="inline-flex items-center justify-center text-center px-2.5 py-1 text-lg font-medium leading-4 bg-green-100 text-green-800"
        >
          +
        </span>
      </dd>
      <dd
        class="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-green-600"
      >
        +{{ income }}
      </dd>
    </div>
    <div
      class="flex flex-wrap items-baseline justify-between px-4 py-10 bg-white gap-x-4 gap-y-2 sm:px-6 xl:px-8"
    >
      <dt class="text-sm font-medium leading-6 text-gray-500">Outcome</dt>
      <dd class="text-xs font-medium text-green-600">
        <span
          class="inline-flex items-center justify-center px-2.5 py-1 text-center text-lg font-medium leading-4 bg-red-100 text-rose-800"
        >
          -
        </span>
      </dd>
      <dd
        class="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-rose-600"
      >
        {{ outcome }}
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
const props = defineProps({
  income: {
    type: String,
    required: true,
  },
  outcome: {
    type: String,
    required: true,
  },
});
</script>
