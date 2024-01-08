<template>
  <v-dialog
    :model-value="true"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    persistent
  >
    <app-contact-form title="New Contact" :handle-save="handleSave" />
  </v-dialog>
</template>

<script setup lang="ts">
import AppContactForm from '@/components/ContactForm.vue'
import type { FormModel } from '@/models'
import { storeContact } from '@/services/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const { mutateAsync } = storeContact()

async function handleSave(data: FormModel) {
  await mutateAsync(data)
  router.push('/')
}
</script>
