<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useQueryClient } from 'vue-query'

useQueryClient()
</script>

<template>
  <RouterView />
</template>
