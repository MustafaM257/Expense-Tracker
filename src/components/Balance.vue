<template>
  <div class="w-full max-w-3xl">
    <dl class="grid grid-cols-1 gap-5 mt-5">
      <div class="px-4 py-5 overflow-hidden bg-white shadow sm:p-6">
        <dt class="text-xl font-semibold leading-6 text-center text-gray-900">
          Balance
        </dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {{ balance }}
        </dd>
      </div>
    </dl>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  balance: {
    type: Number,
    required: true,
  },
});
</script>
