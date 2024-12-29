<script setup>
import { ArrowUpRight } from "lucide-vue-next"
defineProps({
  issueURL: String
})
</script>

<template>
  <a
    :href="issueURL"
    target="_blank"
    rel="external noopener noreferrer"
    class="group flex items-center gap-1 transition-colors duration-300 ease-in-out hover:text-accent"
  >
    <span class="block">Issues</span>
    <ArrowUpRight
      size="16"
      class="transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
    />
  </a>
</template>
