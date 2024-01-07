<template>
  <v-btn variant="outlined" @click="handleClick" :loading="isLoading">
    <v-icon icon="mdi-trash-can-outline" />
    Delete {{ isLoading ? 1 : 0 }}
  </v-btn>
  <v-snackbar v-model="snackbar">
    {{ message }}

    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { trashContacts } from '@/services/api'
import { ref } from 'vue'

interface Props {
  ids: string[]
}

const snackbar = ref<boolean>()
const message = ref<string>('')
const { ids } = defineProps<Props>()
const { isLoading, mutateAsync } = trashContacts(ids)

async function handleClick() {
  await mutateAsync()
  snackbar.value = true
  message.value = `${ids.length > 1 ? 'Deleted contacts' : 'Contact deleted'}`
}
</script>
