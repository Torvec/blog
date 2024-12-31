<script setup>
defineProps({
  pathname: String,
  name: String,
  username: String
})
import { ArrowLeft } from "lucide-vue-next"
</script>

<template>
  <div
    v-if="pathname === '/'"
    class="group h-6 overflow-hidden font-medium transition-colors duration-1000 ease-in-out hover:text-muted"
  >
    <span class="block transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
      <span class="block">{{ name }}</span>
      <span class="block">{{ username }}</span>
    </span>
  </div>
  <a
    v-else
    href="/"
    class="group block overflow-hidden font-medium text-accent transition-colors duration-300 ease-in-out hover:text-muted"
  >
    <span
      class="flex -translate-x-6 items-center gap-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
    >
      <ArrowLeft :size="16" />
      <span>{{ name }}</span>
    </span>
  </a>
</template>
