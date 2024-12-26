<script setup>
import { useDark, useToggle } from "@vueuse/core"
import { Moon, Sun } from "lucide-vue-next"

const isDark = useDark({
  selector: "html",
  valueDark: "dark",
  valueLight: "light"
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    class="flex items-center gap-2 transition-all duration-300 ease-in-out text-muted hover:text-accent hover:scale-110"
  >
    <Moon v-if="!isDark" :size="22" :stroke-width="1" />
    <Sun v-if="isDark" :size="22" />
  </button>
</template>
