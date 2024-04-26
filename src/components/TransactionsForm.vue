<template>
  <form
    class="flex-col items-baseline justify-between w-full max-w-3xl px-4 bg-white gap-x-4 gap-y-2 sm:px-6 xl:px-8"
  >
    <h3 class="py-4 text-xl font-semibold leading-6 text-center text-gray-900">
      Add New Transaction
    </h3>
    <div class="flex flex-wrap items-center justify-between w-full py-6">
      <div class="flex flex-col gap-3">
        <label
          for="text"
          class="text-sm font-medium leading-6 text-gray-500 text-start"
          >Text</label
        >
        <input
          class="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-gray-900"
          type="text"
          id="text"
          placeholder="transaction details..."
        />
      </div>
      <div class="flex flex-col gap-3">
        <label
          for="amount"
          class="text-sm font-medium leading-6 text-gray-500 text-start"
          >Amount</label
        >
        <input
          class="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-gray-900"
          type="number"
          id="amount"
          placeholder="$$$"
        />
      </div>
    </div>
    <button
      class="p-3 my-4 text-white transition-all border-2 bg-neutral-900 hover:bg-white hover:text-neutral-900"
    >
      Add Transaction
    </button>
  </form>
</template>
<style scoped>
input {
  @apply outline-none focus:border-x-black transition-all duration-300 ease-in-out placeholder:text-base text-base rounded-none;
}
</style>
