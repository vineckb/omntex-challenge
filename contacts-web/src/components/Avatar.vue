<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-avatar color="brown" :size="size || 100">
    <span :style="`font-size: ${size / 3 || 33}px`">{{ initials }}</span>
  </v-avatar>
</template>

<script setup lang="ts">
import { getInitials } from '@/helpers/initials'

interface Props {
  size: number
  name: string
}

const { name, size } = defineProps<Props>()
const initials = getInitials(name)
</script>
