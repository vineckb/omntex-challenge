<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-avatar color="brown" :size="size || 100">
    <span v-if="name" :style="`font-size: ${size / 3 || 33}px`">
      {{ getInitials(name) }}
    </span>
    <span v-if="!name">
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
</script>
