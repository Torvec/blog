<script setup>
import { useDark, useToggle } from "@vueuse/core"
import { Moon, Sun } from "lucide-vue-next"

const isDark = useDark({
  selector: "body",
  valueDark: "dark",
  valueLight: "light"
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    class="transition-opacity duration-300 ease-in-out hover:opacity-50"
  >
    <Moon v-if="!isDark" :size="16" />
    <Sun v-if="isDark" :size="16" />
  </button>
</template>
