<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-avatar color="brown" :size="size || 100">
    <span v-if="name" :style="`font-size: ${size / 3 || 33}px`">{{
      initials
    }}</span>
    <span n-if="!name">
      <v-icon :size="size * 0.7" icon="mdi-account"></v-icon>
    </span>
  </v-avatar>
</template>

<script setup lang="ts">
import { getInitials } from '@/helpers/initials'

interface Props {
  size: number
  name?: string
}

const { name, size } = defineProps<Props>()
const initials = name ? getInitials(name) : ''
</script>
