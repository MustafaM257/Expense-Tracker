<template>
  <ul role="list" class="w-full max-w-3xl space-y-3 bg-white">
    <h3 class="py-4 text-xl font-semibold leading-6 text-center text-gray-900">
      History
    </h3>
    <li
      v-for="item in items"
      :key="item.id"
      class="px-4 py-4 overflow-hidden bg-white border-2 shadow sm:px-6"
      :class="{ 'border-rose-600': item.id === 1 }"
    >
      <!-- Your content -->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
      tenetur
    </li>
  </ul>
</template>

<script setup>
const items = [
  { id: 1 },
  // More items...
];
</script>
