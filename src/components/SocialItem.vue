<script setup lang="ts">
defineProps<{
  title: string
  href: string
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="flex items-center gap-3 text-gray-300 hover:text-gray-50 transition-all"
    :aria-label="title"
  >
    <slot />
    <span class="hidden sm:block">{{ title }}</span>
  </a>
</template>
