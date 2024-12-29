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
    class="flex items-center gap-2 text-muted transition-all duration-300 ease-in-out hover:scale-125 hover:text-accent"
  >
    <Moon v-if="!isDark" :size="18" :stroke-width="1" />
    <Sun v-if="isDark" :size="18" />
  </button>
</template>
